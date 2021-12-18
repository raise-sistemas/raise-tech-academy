// import { isUnder } from '../lab/utils/isUnder.js'
// import {
//   gridTest,
//   gridFromBottom,
//   gridFromLeft,
//   gridFromRight
// } from '../main/assets/defaultGrid.js'
// import { bunnyFinder } from '../main/utils/bunnyFinder.js'
// import { isOnTheLeft } from './utils/isOnTheLeft.js'
// import { coordinates } from '../main/assets/indexes.js'

import {
  gridFromLeft,
  carrotTest,
  gridTest,
  emptyGrid
} from '../main/assets/defaultGrid.js'
import { newCarrot } from '../main/functions/newCarrot.js'
import { isUpper, carrotFinder } from '../main/utils/index.js'

// console.log(gridTest.length)
// console.log(gridTest[143])
// console.log(gridTest[144]+gridTest[145])
// console.log(gridTest[146]+gridTest[147])

console.log(newCarrot(gridTest))
