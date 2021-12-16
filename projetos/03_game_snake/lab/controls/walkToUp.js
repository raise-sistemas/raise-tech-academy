import { bunnyFinder } from '../utils/bunnyFinder.js'
import { carrotFinder } from '../utils/carrotFinder.js'
import { isOver } from '../utils/IsOver.js'
import { newCarrot } from '../utils/newCarrot.js'

// import { gridFromBottom } from '../assets/defaultGrid.js'

export function walkToUp(grid) {
  let index = bunnyFinder(grid)[0]
  // let carrotIndex = carrotFinder(grid)
  console.clear()

  if (isOver(grid)) {
    // if (carrotIndex == index + 105) {
    //   grid = newCarrot(grid)
    // }

    grid = grid.split('')
    grid[index] = '⬛'
    grid.splice(index + 1, 1)
    grid[index + 105] = '🐰'
    grid = grid.join('')

  } else {
    grid = grid.split('')
    grid[index] = '⬛'
    grid.splice(index + 1, 1)
    grid[index - 15] = '🐰'
    grid = grid.join('')

  }
  // setTimeout(() => {
  console.log(grid)
  return grid
}

// walkToUp()
