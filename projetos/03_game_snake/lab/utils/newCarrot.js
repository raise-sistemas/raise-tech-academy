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
  console.log(bunnyIndex[0])
  console.log(indexes[index])
  
  // Aqui garante que o index sorteado não é o mesmo do coelho.
  if (grid[indexes[index]] == '⬛') {
    grid[indexes[index]] = '🥕'
    grid = grid.join('')
    console.log(grid)
  } 
  // Nos elseIfs eu quero ter certeza que, caso sorteie o mesmo index do coelho, a cenoura possa ir uma casa para cima,
  else if (grid[indexes[index] - 15] == '⬛') {
    grid[indexes[index] - 15] = '🥕'
    grid = grid.join('')
    console.log(grid)
  }
  // ou casa para baixo,
  else if (grid[indexes[index] + 15] == '⬛') {
    grid[indexes[index] + 15] = '🥕'
    grid = grid.join('')
    console.log(grid)
  }
}

newCarrot(gridFromLeft)
