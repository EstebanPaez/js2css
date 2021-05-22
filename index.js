const prettier = require('prettier')

/**
 * Wrap your custom properties into a selector
 * @param  {string} data - your Custom properties
 * @param  {string} selector - a CSS selector
 */
const wrapElement = (data, selector = ':root') => `
${selector} {
  ${data}
}  
`

/**
 * Transform your design tokens into CSS custom properties
 * @param  {object | string} tokens - your tokens
 * @param  {string} wrapperSelector - a CSS selector
 */
function tokens2css (tokens, wrapperSelector = ':root') {
  if (typeof tokens === 'string') tokens = JSON.parse(tokens)
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

  recursive('', tokens)
  const textBase = wrapElement(text, wrapperSelector)
  return prettier.format(textBase, { parser: 'css' })
}

module.exports = tokens2css
