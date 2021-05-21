const tokens2css = require('.')
const minimist = require('minimist')
const fs = require('fs').promises
const mkdirp = require('mkdirp')
const path = require('path')
const chalk = require('chalk')

const cli = async () => {
  const args = minimist(process.argv.slice(2))

  const filePath = args._[0].replace('./', '')
  if (!filePath) throw Error('Filepath is required')
  const file = require(path.join(process.cwd(), filePath))

  const result = await tokens2css(file)

  const outFileName = filePath.replace(path.extname(filePath), '.css')
  const outFilePath = path.join(process.cwd(), args.outfile || outFileName)

  try {
    await mkdirp(path.dirname(outFilePath))
    await fs.writeFile(outFilePath, result, 'utf-8')
    return console.log(chalk.cyanBright('Build successfully 🎉'))
  } catch (error) {
    console.error(error)
  }
}

module.exports = cli
