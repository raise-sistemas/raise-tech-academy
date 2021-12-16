import { bunnyFinder } from '../utils/bunnyFinder.js'
import { isOver } from '../utils/IsOver.js'

// import { gridFromBottom } from '../assets/defaultGrid.js'

export function walkToUp(grid) {
  let index = bunnyFinder(grid)[0]
  console.clear()

  if (isOver(grid)) {
    grid = grid.split('')
    grid[index + 106] = '🐰'
    grid[index] = '⬛'
    grid.splice(index + 1, 1)
    grid = grid.join('')
    console.log(index)

  } else {
    grid = grid.split('')
    grid[index] = '⬛'
    grid.splice(index + 1, 1)
    grid[index - 15] = '🐰'
    grid = grid.join('')
    console.log(index)
  }
  // setTimeout(() => {
  console.log(grid)
  return grid
}

// walkToUp()
