/**
 * Wrap your custom properties into a selector
 * @param  {string} data - your Custom properties
 * @param  {string} selector - a CSS selector
 */
const wrapElement = (data, selector = ':root') =>
`${selector} {
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

  const recursive = (prefix, tokens) => {
    return Object.entries(tokens).reduce((accumulate, [key, value]) => {
      if (Array.isArray(value)) {
        if (!prefix) return accumulate + `  --{key}: ${value.join(', ')};\n`
        return accumulate + `  ${prefix}-${key}: ${value.join(', ')};\n`
      }

      if (typeof value === 'object') {
        if (!prefix) return accumulate + recursive(`--${key}`, value)
        return accumulate + recursive(`${prefix}-${key}`, value)
      }

      if (!prefix) return accumulate + `  --${key}: ${value};\n`

      return accumulate + `  ${prefix}-${key}: ${value};\n`
    }, '')
  }

  // Recursive moment 👌
  const text = recursive('', tokens)

  const textBase = wrapElement(text.slice(0, text.length - 2), wrapperSelector)
  return textBase
}

module.exports = tokens2css
