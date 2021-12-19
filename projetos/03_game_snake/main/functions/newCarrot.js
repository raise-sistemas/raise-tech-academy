// import { gridFromLeft } from '../assets/defaultGrid.js'
import { coordinates, indexes } from '../assets/indexes.js'
import { carrotFinder } from '../utils/carrotFinder.js'
import { eraseCarrot } from './eraseCarrot.js'

function randomCarrot(grid) {
  const index = Math.round(Math.random() * indexes.length - 1)

  // Aqui garante que o index sorteado não é o mesmo do coelho.
  if (grid[indexes[index]] == '⬛') {
    grid = grid.split('')
    grid[indexes[index]] = '🥕'
    grid = grid.join('')
  }
  // Nos elseIfs eu quero ter certeza que, caso sorteie o mesmo index do coelho, a cenoura possa ir uma casa para cima.
  else if (grid[indexes[index] - 15] == '⬛') {
    grid = grid.split('')
    grid[indexes[index] - 15] = '🥕'
    grid = grid.join('')
  }
  // ou uma casa para baixo.
  else if (grid[indexes[index] + 15] == '⬛') {
    grid = grid.split('')
    grid[indexes[index] + 15] = '🥕'
    grid = grid.join('')
  }

  return grid
}
export function newCarrot(grid) {
  const carrotIndex = carrotFinder(grid)

  // Caso não exista uma cenoura, uma vai ser gerada
  if (String(carrotIndex) == 'undefined') {
    grid = randomCarrot(grid)
  }
  // Caso já exista, ela vai ser apagada, e gerada outra.
  else {
    // grid = eraseCarrot(grid)
    grid = randomCarrot(grid)
  }
  return grid
}

// console.log(newCarrot(gridFromLeft))
