// import { gridFromLeft } from '../assets/defaultGrid.js'
import { indexes } from '../assets/indexes.js'
import { carrotFinder } from './carrotFinder.js'
export function newCarrot(grid) {
  const index = Math.round(Math.random() * indexes.length - 1)
  const carrotIndex = carrotFinder(grid)

  

  // Aqui garante que o index sorteado não é o mesmo do coelho.
  if (grid[indexes[index]] == '⬛') {
    grid = grid.split('')
    grid[indexes[index]] = '🥕'
    grid = grid.join('')
  }
  // Nos elseIfs eu quero ter certeza que, caso sorteie o mesmo index do coelho, a cenoura possa ir uma casa para cima,
  else if (grid[indexes[index] - 15] == '⬛') {
    grid = grid.split('')
    grid[indexes[index] - 15] = '🥕'
    grid = grid.join('')
  }
  // ou uma casa para baixo,
  else if (grid[indexes[index] + 15] == '⬛') {
    grid = grid.split('')
    grid[indexes[index] + 15] = '🥕'
    grid = grid.join('')
  }

  return grid
}

// console.log(newCarrot(gridFromLeft))
