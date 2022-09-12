const CITIES = require('../data/cities.json')
const CODES = require('../data/codes.json')

function encodeCity(cityName) {
  let cityCode = CITIES[cityName.toUpperCase().trim()]
  if (!cityCode) {
    throw new Error('INVALID CITY')
  } else {
    return cityCode
  }
}

function decodeCity(code) {
  let cityName = CODES[code]
  if (!cityName) {
    throw new Error('INVALID CODE')
  } else {
    return cityName
  }
}

module.exports = {
  encodeCity,
  decodeCity,
}
