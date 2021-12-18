// import { gridFromLeft } from '../assets/defaultGrid.js'
import { coordinates } from '../assets/indexes.js'
import { bunnyFinder } from '../utils/bunnyFinder.js'
import { isOnTheRight } from '../utils/isOnTheRight.js'

export function walkToRight(grid) {
  const bunnyCoordinates = bunnyFinder(grid)
  const bunnyLine = bunnyCoordinates[0]
  const bunnyColumn = bunnyCoordinates[1]
  console.clear()

  if (isOnTheRight(grid)) {
    grid = grid.split('')
    grid[coordinates[bunnyLine][bunnyColumn]] = '⬛'
    grid.splice(coordinates[bunnyLine][bunnyColumn] + 1, 1)

    // Para sair do canto direito e ir para canto esquerdo do grid, são 11 colunas a menos.
    grid[coordinates[bunnyLine][bunnyColumn - 11]] = '🐰'
    grid = grid.join('')
  } else {
    grid = grid.split('')
    grid[coordinates[bunnyLine][bunnyColumn]] = '⬛'
    grid.splice(coordinates[bunnyLine][bunnyColumn] + 1, 1)

    // Ir para a direita é aumentar uma coluna
    grid[coordinates[bunnyLine][bunnyColumn + 1]] = '🐰'
    grid = grid.join('')
  }
  console.log(grid)
  return grid
}

// walkToRight()
