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


const bunnyCoordinates = bunnyFinder(gridTest)
const carrotCoordinates = carrotFinder(gridTest)
// const bunnyLine = bunnyCoordinates[0]
// const bunnyColumn = bunnyCoordinates[1]
console.log(bunnyCoordinates)
console.log(carrotCoordinates)
console.log(coordinates[carrotCoordinates[0]][carrotCoordinates[1]])
console.log(gridTest[coordinates[carrotCoordinates[0]][carrotCoordinates[1]]])
