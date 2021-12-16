// import { gridFromRight } from '../assets/defaultGrid.js'

export function walkToLeft(grid) {
  let index = bunnyFinder(grid)[0]
    console.clear()
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

// walkToleft()
