import { defaultGrid } from './assets/defaultGrid.js'

let interval = 1000
let steps = 6
let grid = defaultGrid
let index = 29

const stop = setInterval(() => {
  console.clear()
  console.log(grid)
  grid = grid.split('')

  if (grid[index] + grid[index + 1] == '🐰') {
    grid[index] = '⬛'
    grid.splice(index + 1, 1)
    grid[index + 1] = '🐰'
    grid = grid.join('')
  }

  // else if (grid[index] == '🐰') {
  //   grid[index] = '⬛'
  //   grid[index + 1] = '🐰'
  //   grid = grid.join('')
  // }

  index += 1
  if (index > 40) {
    clearInterval(stop)
  }
}, interval)
