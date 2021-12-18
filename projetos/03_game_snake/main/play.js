import {
  walkToDown,
  walkToLeft,
  walkToUp,
  walkToRight
} from './controls/index.js'
import { gridTest } from './assets/defaultGrid.js'
// import { timeout } from './assets/timeout.js'

export function play(grid) {
  console.log(grid)
  setInterval(() => {
    grid = walkToRight(grid)
  }, 500)
}

play(gridTest)
