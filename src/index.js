#!/usr/bin/env node

const { getCheckChar, isValidCF } = require('./utils/check')
const { decodeCity, encodeCity } = require('./utils/city')
const { decodeBirthdate, encodeBirthdate } = require('./utils/date')
const { encodeName } = require('./utils/names')
const args = require('args')

/**
 *
 * @param {String} firstName
 * @param {String} lastName
 * @param {boolean} isFemale
 * @param {Date} birthdate
 * @param {String} birthCity
 * @returns Italian TIN (Codice Fiscale) string.
 */
function encodeCF(firstName, lastName, isFemale, birthdate, birthCity) {
  let str = ''
  str +=
    encodeName(lastName) +
    encodeName(firstName) +
    encodeBirthdate(birthdate, isFemale) +
    encodeCity(birthCity)
  return str + getCheckChar(str)
}

function decodeCF(cf) {
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

args.parse(process.argv)

if (process.env.NODE_ENV !== 'test' && !args.sub.length) {
  args.showHelp()
}

module.exports = {
  encodeCF,
  decodeCF,
}
