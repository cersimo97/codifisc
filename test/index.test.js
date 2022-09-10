import { decodeCF } from '../src'

describe('Main functions', () => {
  it('Should encode a CF', () => {})
  it('Should decode a CF', () => {
    const cf = 'CRNSMN97P08L400G'
    expect(decodeCF(cf)).toStrictEqual({
      year: '97',
      month: 9,
      day: 8,
      isFemale: false,
      city: 'TREVIGLIO',
    })
  })
})
