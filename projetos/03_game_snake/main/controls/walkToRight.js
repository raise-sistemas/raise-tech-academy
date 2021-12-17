// import { gridFromLeft } from '../assets/defaultGrid.js'
import { bunnyFinder } from '../utils/bunnyFinder.js'
import { isOnTheRight } from '../utils/isOnTheRight.js'

export function walkToRight(grid) {
  let index = bunnyFinder(grid)[0]
  console.clear()

  if (isOnTheRight(grid)) {
    grid = grid.split('')
    grid[index - 11] = '🐰'
    grid[index] = '⬛'
    grid.splice(index + 1, 1)
    grid = grid.join('')
  } else {
    grid = grid.split('')
    grid[index] = '⬛'
    grid.splice(index + 1, 1)
    grid[index + 1] = '🐰'
    grid = grid.join('')
  }
  console.log(grid)
  return grid
}

// walkToRight()
