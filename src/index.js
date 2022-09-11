import { getCheckChar, isValidCF } from './utils/check'
import { decodeCity, encodeCity } from './utils/city'
import { decodeBirthdate, encodeBirthdate } from './utils/date'
import { encodeName } from './utils/names'
import args from 'args'

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

args
  .command(
    'encode',
    'Encode a CF string from data',
    function (name, sub, options) {
      const { firstname, lastname, male, birthdate, city } = options
      const d = new Date(birthdate)
      console.log(encodeCF(firstname, lastname, !male, d, city))
    }
  )
  .command(
    'decode',
    'Decode a CF string and extract related data',
    function (name, sub, options) {
      if (sub.length === 0) {
        args.showHelp()
      } else {
        console.log(decodeCF(sub[0]))
      }
    }
  )
  .option('firstname', 'First name')
  .option('lastname', 'Last name')
  .option('city', 'City of birth')
  .option(['n', 'birthdate'], 'Date of birth (milliseconds)')
  .option('male', 'Male person', false)
  .example(
    'codifisc encode -f <firstname> -l <lastname> -b <000000000000> -c <city>',
    'Encode a CF string from data'
  )
  .example('codifisc decode CRNSMN92L51L400G', 'Extract info from CF string')

const flags = args.parse(process.argv)
