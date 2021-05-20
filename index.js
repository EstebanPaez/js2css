const minimist = require('minimist')
const prettier = require('prettier')
const fs = require('fs').promises
const mkdirp = require('mkdirp')
const path = require('path')
const chalk = require('chalk')

const wrapElement = (data) => `
:root {
  ${data}
}  
`

async function main () {
  const args = minimist(process.argv.slice(2))

  const filePath = args._[0].replace('./', '')
  if (!filePath) throw Error('Filepath is required')
  const file = require(path.join(process.cwd(), filePath))

  let text = ''

  const recursive = (prefix, object) => {
    Object.entries(object).map(([key, value]) => {
      if (typeof value === 'object') {
        return recursive('--' + prefix + key, value)
      } else {
          if (!prefix) return text += `--${key}: ${value};`
          return text += `${prefix}-${key}: ${value};`
      }
    })  
  }

  recursive('', file)
  const textBase = wrapElement(text)
  const result = prettier.format(textBase, { parser: 'css' })

  const outfileName = filePath.replace(path.extname(filePath), '.css')
  const outFilePath = path.join(process.cwd(), args.outfile || outfileName)

  try {
    await mkdirp(path.dirname(outFilePath))
    await fs.writeFile(outFilePath, result, 'utf-8')
    return console.log(chalk.cyanBright('Build successfully 🎉'))
  } catch (error) {
    console.error(error)
  }
}

module.exports = main