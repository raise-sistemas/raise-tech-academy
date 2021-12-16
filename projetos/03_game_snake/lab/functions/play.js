import {
  walkToDown,
  walkToRight,
  walkToLeft,
  walkToUp
} from '../controls/index.js'
import { gridTest } from '../assets/defaultGrid.js'
import { timeout } from '../assets/timeout.js'
import { newCarrot } from '../utils/newCarrot.js'

export function play(grid) {
  // console.log(grid)

  setInterval(() => {
    grid = walkToUp(grid)
    // grid = newCarrot(grid)
  }, 1000)
}

play(gridTest)
