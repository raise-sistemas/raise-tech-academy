import {
  gridFromLeft,
  carrotTest,
  gridTest,
  emptyGrid
} from '../main/assets/defaultGrid.js'
import { coordinates } from '../main/assets/indexes.js'
import { eraseCarrot } from '../main/functions/eraseCarrot.js'
import { imminentCarrotUp } from '../main/functions/imminentCarrotUp.js'
import { newCarrot } from '../main/functions/newCarrot.js'
import { isUpper, carrotFinder, bunnyFinder } from '../main/utils/index.js'
import { isCarrotUpper } from '../main/utils/isCarrotUpper.js'
import { outOfRange } from '../main/utils/outOfRange.js'

// const bunnyLine = bunnyFinder(gridTest)[0]
const carrot = carrotFinder(gridTest)

// console.log(bunnyLine - carrotIndex)
// console.log(carrot)
// console.log(bunnyFinder(gridTest))
// console.log(outOfRange(bunnyLine))
// console.log(bunnyLine)
// console.log(carrotIndex)

console.log(imminentCarrotUp(gridTest))

// coordinates[carrotLine][carrotColumn] - bunnyLine == 16
// console.log(imminentCarrotUp(gridTest))
// console.log(isUpper(gridTest))
// console.log(isCarrotUpper(gridTest))
