// import { gridFromRight } from '../assets/defaultGrid.js'
import { timeout } from '../assets/timeout.js'
import { bunnyFinder } from '../utils/bunnyFinder.js'
import { isOnTheLeft } from '../utils/isOnTheLeft.js'

export function walkToLeft(grid) {
  let index = bunnyFinder(grid)[0]
  console.clear()

  if (isOnTheLeft(grid)) {
    grid = grid.split('')
    grid[index] = '⬛'
    grid.splice(index + 1, 1)
    grid[index + 11] = '🐰'
    grid = grid.join('')
  } else {
    grid = grid.split('')
    grid[index - 1] = '🐰'
    grid[index] = '⬛'
    grid.splice(index + 1, 1)
    grid = grid.join('')
  }
  // setTimeout(() => {
    console.log(grid)
    return grid
  // }, timeout)
}
// walkToleft()
