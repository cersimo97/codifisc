const { encodeName } = require('../src/utils/names')

describe('Names-related utilities', () => {
  it('Name w/ enough consonants', () => {
    const name = 'giovanni'
    expect(encodeName(name)).toBe('GVN')
  })

  it('Name with vowels', () => {
    const name = 'Elia'
    expect(encodeName(name)).toBe('LEI')
  })

  it('Name without enough letters', () => {
    const name = 'fO'
    expect(encodeName(name)).toBe('FOX')
  })
})
