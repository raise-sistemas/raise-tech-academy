// import {
//   carrotFinder,
//   newCarrot,
//   walkToDown,
//   walkToLeft,
//   walkToRight,
//   walkToUp
// } from './index.js'

import { walkToDown } from './walkToDown.js'
import { gridTest } from '../assets/defaultGrid.js'

export function play(grid) {
  setInterval(() => {
    grid = walkToDown(grid)
  }, 200)
}

play(gridTest)
