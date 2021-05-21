const prettier = require('prettier')

const wrapElement = (data) => `
:root {
  ${data}
}  
`

function tokens2css (file) {
  if (typeof file === 'string') file = JSON.parse(file)
  let text = ''

  const recursive = (prefix, object) => {
    Object.entries(object).map(([key, value]) => {
      if (Array.isArray(value)) {
        if (!prefix) {
          text += `--${key}: ${value.join(', ')};`
          return text
        }

        text += `${prefix}-${key}: ${value.join(', ')};`
        return text
      }

      if (typeof value === 'object') {
        if (!prefix) {
          return recursive(`--${key}`, value)
        }

        return recursive(`${prefix}-${key}`, value)
      }

      if (!prefix) {
        text += `--${key}: ${value};`
        return text
      }

      text += `${prefix}-${key}: ${value};`
      return text
    })
  }

  recursive('', file)
  const textBase = wrapElement(text)
  return prettier.format(textBase, { parser: 'css' })
}

module.exports = tokens2css
