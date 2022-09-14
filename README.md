# codifisc

![npm](https://img.shields.io/npm/v/codifisc)
[![Featured on Openbase](https://badges.openbase.com/js/featured/codifisc.svg?token=ZR9igomvh6X4tDhFomtFIC6qHQUwKxZf3T1mBp6XeWI=)](https://openbase.com/js/codifisc?utm_source=embedded&amp;utm_medium=badge&amp;utm_campaign=rate-badge)

Utility to encode and decode italian TIN (Codice Fiscale)

## Usage

```javascript
const { encodeCF } = require('codifisc')

let cf = encodeCF({ firstName, lastName, isFemale, birthdate, birthCity })
let obj = decodeCF(cf)
//
// obj = {
//     year: '00',
//     month: 0,
//     day: 0,
//     isFemale: true/false,
//     city: ''
// }
```

## CLI

```bash
  Usage: index.js [options] [command]

  Commands:
    decode   Decode a CF string and extract related data
    encode   Encode a CF string from data
    help     Display help
    version  Display version

  Options:
    -n, --birthdate  Date of birth (milliseconds)
    -c, --city       City of birth
    -f, --firstname  First name
    -h, --help       Output usage information
    -l, --lastname   Last name
    -m, --male       Male person (disabled by default)
    -v, --version    Output the version number

  Examples:
    - Encode a CF string from data
    $ codifisc encode -f <firstname> -l <lastname> -n <000000000000> -c <city>

    - Extract info from CF string
    $ codifisc decode CRNSMN92L51L400G
```
