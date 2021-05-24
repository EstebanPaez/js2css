const tokens2css = require('.')
const minimist = require('minimist')
const fs = require('fs').promises
const mkdirp = require('mkdirp')
const path = require('path')

const cli = async () => {
  const args = minimist(process.argv.slice(2))

  const filePath = args._[0].replace('./', '')
  const wrapper = args.wrapper

  if (!filePath) throw Error('Filepath is required')

  const file = require(path.join(process.cwd(), filePath))
  const result = tokens2css(file, wrapper)

  const outFileName = filePath.replace(path.extname(filePath), '.css')
  const outFilePath = path.join(process.cwd(), args.outfile || outFileName)

  try {
    await mkdirp(path.dirname(outFilePath))
    await fs.writeFile(outFilePath, result, 'utf-8')
    return console.log('\x1b[33m%s\x1b[0m', 'Build successfully 🎉')
  } catch (error) {
    console.error(error)
  }
}

module.exports = cli
