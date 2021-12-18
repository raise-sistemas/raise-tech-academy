import {
  gridFromLeft,
  carrotTest,
  gridTest,
  emptyGrid
} from '../main/assets/defaultGrid.js'
import { eraseCarrot } from '../main/functions/eraseCarrot.js'
import { newCarrot } from '../main/functions/newCarrot.js'
import { imminentCarrotUp } from '../main/functions/imminentCarrotUp.js'
import { isUpper, carrotFinder, bunnyFinder } from '../main/utils/index.js'
import { outOfRange } from '../main/utils/outOfRange.js'

// console.log(carrotFinder(gridTest))
// console.log(bunnyFinder(gridTest))
// console.log(imminentCarrotUp(gridTest))
// console.log(isUpper(gridTest))

console.log(outOfRange(55))