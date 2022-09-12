const { decodeCF, encodeCF } = require('../src')

describe('Main functions', () => {
  it('Should encode a CF', () => {
    const firstName = 'simone'
    const lastName = 'cernuschi'
    const birthdate = 873669600000
    const isFemale = false
    const birthCity = 'treviglio'
    expect(
      encodeCF({ firstName, lastName, birthdate, birthCity, isFemale })
    ).toBe('CRNSMN97P08L400G')
  })
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
