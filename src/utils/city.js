import CITIES from '../data/cities.json'
import CODES from '../data/codes.json'

export function encodeCity(cityName) {
  let cityCode = CITIES[cityName.toUpperCase().trim()]
  if (!cityCode) {
    throw new Error('INVALID CITY')
  } else {
    return cityCode
  }
}

export function decodeCity(code) {
  let cityName = CODES[code]
  if (!cityName) {
    throw new Error('INVALID CODE')
  } else {
    return cityName
  }
}
