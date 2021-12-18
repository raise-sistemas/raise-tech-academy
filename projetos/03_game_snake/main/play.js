import { walkToDown, walkToLeft, walkToUp } from './controls/index.js'
import { gridTest } from './assets/defaultGrid.js'
// import { timeout } from './assets/timeout.js'

export function play(grid) {
  console.log(grid)
  setInterval(() => {
    grid = walkToUp(grid)
  }, 500)
}

play(gridTest)
