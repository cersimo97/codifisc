const MONTHS = {
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D',
  5: 'E',
  6: 'H',
  7: 'L',
  8: 'M',
  9: 'P',
  10: 'R',
  11: 'S',
  12: 'T',
}

function encodeMonth(month) {
  return MONTHS[month]
}

function encodeBirthday(day, isFemale) {
  if (isFemale) {
    return +day + 40
  } else {
    return ('' + day).padStart(2, '0')
  }
}

export function encodeBirthdate(date, isFemale) {
  let d = new Date(date)
  let year = d.getFullYear().toString()
  year = year.slice(year.length - 2, year.length)
  let month = encodeMonth(d.getMonth() + 1)
  let day = encodeBirthday(d.getDate(), isFemale)
  return year + month + day
}

export function decodeBirthdate(str) {
  const s = str.trim().toUpperCase()
  let year = s.slice(0, 2)
  let month = Object.values(MONTHS).findIndex(v => v === s.slice(2, 3)) + 1
  let day = +s.slice(3)
  let isFemale = false
  if (day > 40) {
    isFemale = true
    day = day - 40
  }

  return {
    year,
    month,
    day,
    isFemale,
  }
}
