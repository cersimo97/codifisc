import { encodeBirthdate } from '../src/utils/date'

describe('Date-related utilities', () => {
  // 2020-06-03
  const d = new Date(2020, 5, 3)
  it('Male', () => {
    expect(encodeBirthdate(d, false)).toBe('20H03')
  })
  it('Female', () => {
    expect(encodeBirthdate(d, true)).toBe('20H43')
  })
})
