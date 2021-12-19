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




console.log(bunnyFinder(gridTest))














// console.log(gridTest)
// console.log(eraseCarrot(gridTest))

// const carrotPosition = carrotFinder(gridTest)
// const bunnyPosition = bunnyFinder(gridTest)

// console.log(carrotPosition, bunnyPosition)
// console.log(Boolean(bunnyPosition[0] == carrotPosition[0]))

// const bunnyIndex = coordinates[bunnyPosition[0]][bunnyPosition[1]]
// const carrotIndex = coordinates[carrotPosition[0]][carrotPosition[1]]

// console.log(bunnyIndex, carrotIndex)
