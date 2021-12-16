// import { gridFromBottom } from '../assets/defaultGrid.js'

export function walkToUp() {
  let interval = 150
  let grid = gridFromBottom
  let index = 134

  setInterval(() => {
    console.clear()
    console.log(grid)
    grid = grid.split('')

    if (grid[index] + grid[index + 1] == '🐰') {
      grid[index] = '⬛'
      grid.splice(index + 1, 1)
      grid[index - 15] = '🐰'
      grid = grid.join('')
    }

    if (index == 29) {
      grid = gridFromBottom
      index = 134
    } else {
      index = index - 15
    }
  }, interval)
}

// walkToUp()
