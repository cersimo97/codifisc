const { getCheckChar, isValidCF } = require('../src/utils/check')

describe('Check-related', () => {
  const validCF = 'CRNSMN97P08L400G'
  it('Should get valid check char', () => {
    expect(getCheckChar(validCF.slice(0, validCF.length - 1))).toBe('G')
  })
  it('Should check a valid code', () => {
    expect(isValidCF(validCF)).toBeTruthy()
  })
})
