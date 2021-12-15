import { gridFromLeft } from '../assets/defaultGrid.js'
import { indexes } from '../assets/indexes.js'
import { bunnyFinder } from './bunnyFinder.js'

export function newCarrot(grid) {
  let bunnyIndex = bunnyFinder(grid)
  grid = grid.split('')

  // Ao achar o coelho, que ocupa 2 índices, eu substituo primeiro pelo coelho.
  
  grid[bunnyIndex[0]] = '🐰'
  // E apago o segundo.
  grid.splice(bunnyIndex[1], 1)

  const index = Math.round(Math.random() * indexes.length - 1)
  grid[indexes[index]] = '🥕'
  grid = grid.join('')
  console.log(grid)
  return grid
}

newCarrot(gridFromLeft)
