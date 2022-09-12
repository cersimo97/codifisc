const VOWELS = 'AEIOU'

function encodeName(string) {
  let unspaced = string.toUpperCase().trim()
  let cons = Array.from(unspaced)
    .filter(l => Array.from(VOWELS).every(v => v != l))
    .join('')
  let vow = Array.from(unspaced)
    .filter(l => Array.from(VOWELS).some(v => v == l))
    .join('')
  let result = cons.concat(vow).slice(0, 3)
  if (result.length < 3) result = result.padEnd(3, 'X')
  return result
}

module.exports = {
  encodeName,
}
