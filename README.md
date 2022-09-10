# codifisc

Utility to encode and decode italian TIN (Codice Fiscale)

## Usage

```javascript
import { encodeCF } from 'codifisc'

let cf = encodeCF(firstName, lastName, isFemale, birthdate, birthCity)
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
