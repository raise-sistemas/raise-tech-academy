import { gridFromLeft } from '../assets/defaultGrid.js'
import { newCarrot } from './newCarrot.js'

export function walkToRight(grid) {
  let interval = 150
  grid = gridFromLeft
  let index = 29


  setInterval(() => {
    console.clear()
    console.log(grid)
    grid = grid.split('')



    if (grid[index] + grid[index + 1] == '🐰') {
      grid[index] = '⬛'
      grid.splice(index + 1, 1)
      grid[index + 1] = '🐰'
      grid = grid.join('')
    }

    if (grid[41] + grid[42] == '🐰') {
      grid = gridFromLeft
      index = 29
    } else {
      index += 1
    }
  }, interval)
}

walkToRight()
