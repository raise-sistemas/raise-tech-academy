// import { gridFromLeft } from '../assets/defaultGrid.js'
import { coordinates } from '../assets/indexes.js'
import { carrotFinder } from './carrotFinder.js'

function randomCarrot(grid) {
  const randomLine = Math.round(Math.random() * (coordinates.length - 1))
  const randomColumn = Math.round(Math.random() * (coordinates[0].length - 1))

  // Aqui garante que o index sorteado não é o mesmo do coelho.
  if (grid[coordinates[randomLine][randomColumn]] === '⬛') {
    grid = grid.split('')
    grid[coordinates[randomLine][randomColumn]] = 'C'
    grid = grid.join('')
  } else {
    return randomCarrot(grid)
  }
  // // Nos elseIfs eu quero ter certeza que, caso sorteie o mesmo index do coelho, a cenoura possa ir uma casa para cima.
  // else if (grid[coordinates[randomLine - 1][randomColumn]] === '⬛') {
  //   grid = grid.split('')
  //   grid[coordinates[randomLine - 1][randomColumn]] = 'C'
  //   grid = grid.join('')
  // }
  // // ou uma casa para baixo.
  // else if (grid[coordinates[randomLine + 1][randomColumn]] === '⬛') {
  //   grid = grid.split('')
  //   grid[coordinates[randomLine + 1][randomColumn]] = 'C'
  //   grid = grid.join('')
  // }
  // // Ou uma casa para a direita
  // else if (grid[coordinates[randomLine][randomColumn + 1]] === '⬛') {
  //   grid = grid.split('')
  //   grid[coordinates[randomLine][randomColumn + 1]] = 'C'
  //   grid = grid.join('')
  // }
  // // Ou uma para a esquerda
  // else if (grid[coordinates[randomLine][randomColumn - 1]] === '⬛') {
  //   grid = grid.split('')
  //   grid[coordinates[randomLine][randomColumn - 1]] = 'C'
  //   grid = grid.join('')
  
  return grid
}
export function newCarrot(grid) {
  const carrotIndex = carrotFinder(grid)

  // Caso não exista uma cenoura, uma vai ser gerada
  if (String(carrotIndex[1]) == 'undefined') {
    grid = randomCarrot(grid)
  }
  // Caso já exista, ela vai ser apagada, e gerada outra.
  else {
    grid = grid.replace('C', '⬛')
    grid = randomCarrot(grid)
  }
  return grid
}
