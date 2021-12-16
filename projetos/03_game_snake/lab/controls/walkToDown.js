// import { gridtest } from '../assets/defaultGrid.js'
import { isUnder } from '../utils/isUnder.js'
import { bunnyFinder } from '../utils/bunnyFinder.js'
import { timeout } from '../assets/timeout.js'

export function walkToDown(grid) {
  let index = bunnyFinder(grid)[0]
  console.clear()

  if (isUnder(grid)) {
    grid = grid.split('')
    grid[index - 105] = '🐰'
    grid[index] = '⬛'
    grid.splice(index + 1, 1)
    grid = grid.join('')
  } else {
    grid = grid.split('')
    grid[index] = '⬛'
    grid.splice(index + 1, 1)
    grid[index + 15] = '🐰'
    grid = grid.join('')
  }
  // setTimeout(() => {
  console.log(grid)
  return grid
}

// walkToDown(gridtest)
