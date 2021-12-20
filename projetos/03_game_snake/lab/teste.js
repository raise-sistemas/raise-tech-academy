import {
  carrotTest,
  emptyGrid,
  gridDefault,
  gridTest
} from '../main/assets/defaultGrid.js'
import { coordinates } from '../main/assets/indexes.js'
import { bunnyFinder } from '../main/functions/bunnyFinder.js'
import { carrotFinder } from '../main/functions/carrotFinder.js'
import { imminentCarrotUp } from '../main/imminent-carrot/imminentCarrotUp.js'
import { isBunnyUnder } from '../main/utils/isBunnyUnder.js'
import { isBunnyUpper } from '../main/utils/isBunnyUpper.js'
import { sameColumn } from '../main/utils/sameColumn.js'
import { sameRow } from '../main/utils/sameRow.js'

setInterval(() => {
  let randomHorizontal = Math.round(Math.random())
  let randomVertical = Math.round(Math.random())

  console.log([randomLine, randomColumn])
}, 400)
