const { decodeBirthdate, encodeBirthdate } = require('../src/utils/date')

describe('Date-related utilities', () => {
  // 2020-06-03
  const d = new Date(2020, 5, 3)
  it('Encode male', () => {
    expect(encodeBirthdate(d, false)).toBe('20H03')
  })
  it('Encode female', () => {
    expect(encodeBirthdate(d, true)).toBe('20H43')
  })

  it('Decode male', () => {
    expect(decodeBirthdate('98P28')).toStrictEqual({
      year: '98',
      month: 9,
      day: 28,
      isFemale: false,
    })
  })
  it('Decode female', () => {
    expect(decodeBirthdate('95L43')).toStrictEqual({
      year: '95',
      month: 7,
      day: 3,
      isFemale: true,
    })
  })
})
