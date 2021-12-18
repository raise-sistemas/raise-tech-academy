import { walkToDown, walkToLeft } from './controls/index.js'
import { gridTest } from './assets/defaultGrid.js'
// import { timeout } from './assets/timeout.js'

export function play(grid) {
  console.log(grid)
  setInterval(() => {
    grid = walkToLeft(grid)
  }, 250)
}

play(gridTest)
