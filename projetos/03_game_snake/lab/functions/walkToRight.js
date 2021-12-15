import { gridFromLeft } from '../assets/defaultGrid.js'

export function walkToRight() {
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
