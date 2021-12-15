import { gridFromLeft } from '../assets/defaultGrid.js'

export function walkToDown() {
  let interval = 150
  let grid = gridFromLeft
  let index = 29

  setInterval(() => {
    console.clear()
    console.log(grid)
    grid = grid.split('')

    if (grid[index] + grid[index + 1] == '🐰') {
      grid[index] = '⬛'
      grid.splice(index + 1, 1)
      grid[index + 15] = '🐰'
      grid = grid.join('')
    }

    if (index == 134) {
      grid = gridFromLeft
      index = 29
    } else {
      index += 15
    }
  }, interval)
}

walkToDown()
