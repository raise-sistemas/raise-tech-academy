// import {
//   carrotFinder,
//   newCarrot,
//   walkToDown,
//   walkToLeft,
//   walkToRight,
//   walkToUp
// } from './index.js'

import { walkToDown, walkToLeft } from '../controls/index.js'
import { gridTest } from '../assets/defaultGrid.js'

export function play(grid) {
  console.log(grid)
  setInterval(() => {
    grid = walkToDown(grid)
    grid = walkToLeft(grid)
  }, 1000)
}

play(gridTest)
