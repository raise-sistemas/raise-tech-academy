// import { gridFromRight } from '../assets/defaultGrid.js'
import { coordinates } from '../assets/indexes.js'
import { bunnyFinder } from '../utils/bunnyFinder.js'
import { isOnTheLeft } from '../utils/isOnTheLeft.js'

export function walkToLeft(grid) {
  const bunnyCoordinates = bunnyFinder(grid)
  const bunnyLine = bunnyCoordinates[0]
  const bunnyColumn = bunnyCoordinates[1]
  console.clear()

  if (isOnTheLeft(grid)) {
    grid = grid.split('')
    grid[coordinates[bunnyLine][bunnyColumn]] = '⬛'
    grid.splice(coordinates[bunnyLine][bunnyColumn] + 1, 1)

    // Para sair do canto esquero e ir para o canto direito do grid, são 11 colunas a mais.
    grid[coordinates[bunnyLine][bunnyColumn + 11]] = '🐰'
    grid = grid.join('')
  } else {
    grid = grid.split('')
    grid[coordinates[bunnyLine][bunnyColumn]] = '⬛'
    grid.splice(coordinates[bunnyLine][bunnyColumn] + 1, 1)

    // Andar uma posição para a esquerda é diminuir uma coluna.
    grid[coordinates[bunnyLine][bunnyColumn - 1]] = '🐰'
    grid = grid.join('')
  }

  console.log(grid)
  return grid
}
