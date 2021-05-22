const tokens2css = require('..')
const choicesJson = require('./tokens.json')
const { choices, choicesString, expected } = require('./helpers')

test('Should transform an Js Object as expected', () => {
  const result = tokens2css(choices)
  expect(result).toMatch(expected)
})

test('Should wrap as expected', () => {
  const result = tokens2css(choices, '#app')
  expect(result).toContain('#app')
})

test('Should transform a string as expected', () => {
  const result = tokens2css(choicesString)
  expect(result).toMatch(expected)
})

test('Should transform a JSON as expected', () => {
  const result = tokens2css(choicesJson)
  expect(result).toMatch(expected)
})
