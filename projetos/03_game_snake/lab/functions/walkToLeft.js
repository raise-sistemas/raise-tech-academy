import { gridFromRight } from '../assets/defaultGrid.js'
import { newCarrot } from './newCarrot.js'

export function walkToleft(grid) {
  let interval = 150
  grid = gridFromRight
  let index = 40
  newCarrot(grid)
  setInterval(() => {
    console.clear()
    console.log(grid)
    grid = grid.split('')

    if (grid[index] + grid[index + 1] == '🐰') {
      grid[index] = '⬛'
      grid.splice(index + 1, 1)
      grid[index - 1] = '🐰'
      grid = grid.join('')
    }

    if (grid[28] + grid[29] == '🐰') {
      grid = gridFromRight
      index = 40
    } else {
      index -= 1
    }
  }, interval)
}

walkToleft()
