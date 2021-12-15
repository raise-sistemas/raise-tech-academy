import { emptyGrid } from '../assets/defaultGrid.js'
import { indexes } from '../assets/indexes.js'

export function newCarrot(grid) {
  grid = emptyGrid.split('')
  const index = Math.round(Math.random() * indexes.length - 1)
  grid[indexes[index]] = '🥕'
  grid = grid.join('')
  console.log(grid)
  return grid
}
