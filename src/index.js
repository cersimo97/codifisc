import { getCheckChar, isValidCF } from './utils/check'
import { decodeCity, encodeCity } from './utils/city'
import { decodeBirthdate, encodeBirthdate } from './utils/date'
import { encodeName } from './utils/names'

/**
 *
 * @param {String} firstName
 * @param {String} lastName
 * @param {boolean} isFemale
 * @param {Date} birthdate
 * @param {String} birthCity
 * @returns Italian TIN (Codice Fiscale) string.
 */
export function encodeCF(firstName, lastName, isFemale, birthdate, birthCity) {
  let str = ''
  str +=
    encodeName(lastName) +
    encodeName(firstName) +
    encodeBirthdate(birthdate, isFemale) +
    encodeCity(birthCity)
  return str + getCheckChar(str)
}

export function decodeCF(cf) {
  if (!isValidCF(cf)) {
    throw new Error('INVALID CODE')
  }
  let birthdate = decodeBirthdate(cf.slice(6, 11))
  let city = decodeCity(cf.slice(11, 15))
  return { ...birthdate, city }
}
