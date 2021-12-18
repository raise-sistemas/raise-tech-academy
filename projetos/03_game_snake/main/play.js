import {
  walkToDown,
  walkToLeft,
  walkToUp,
  walkToRight
} from './controls/index.js'
import { gridTest } from './assets/defaultGrid.js'
import { newCarrot } from './functions/newCarrot.js'
// import { timeout } from './assets/timeout.js'

export function play(grid) {
  console.log(grid)
  setInterval(() => {
    console.clear()
    grid = walkToUp(grid)
  }, 500)
}

play(gridTest)
