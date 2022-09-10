import { decodeCity, encodeCity } from '../src/utils/city'

describe('City-related', () => {
  it('Should encode a city correctly', () => {
    expect(encodeCity('ALASSIO')).toBe('A122')
    expect(encodeCity('CAMINO')).toBe('B482')
    expect(() => encodeCity('XXX123')).toThrow('INVALID CITY')
  })
  it('Should decode a city correctly', () => {
    expect(decodeCity('A122')).toBe('ALASSIO')
    expect(decodeCity('B482')).toBe('CAMINO')
    expect(() => decodeCity('XXX3')).toThrow('INVALID CODE')
  })
})
