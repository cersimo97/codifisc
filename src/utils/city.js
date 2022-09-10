import CITIES from '../data/cities.json'

export function encodeCity(cityName) {
  let cityCode = CITIES[cityName.toUpperCase().trim()]
  if (!cityCode) {
    throw new Error('INVALID CITY')
  } else {
    return cityCode
  }
}
