import { getCheckChar } from './utils/check'
import { encodeCity } from './utils/city'
import { encodeBirthdate } from './utils/date'
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
    encodeBirthdate(birthdate) +
    encodeCity(birthCity)
  return str + getCheckChar(str)
}
