import { isUpper, bunnyFinder, carrotFinder } from '../utils/index.js'
import { coordinates } from '../assets/indexes.js'

export function walkToUp(grid) {
  const bunnyCoordinates = bunnyFinder(grid)
  const bunnyLine = bunnyCoordinates[0]
  const bunnyColumn = bunnyCoordinates[1]
  console.clear()

  if (isUpper(grid)) {
    grid = grid.split('')
    grid[coordinates[bunnyLine][bunnyColumn]] = '⬛'
    grid.splice(coordinates[bunnyLine][bunnyColumn] + 1, 1)

    // Para sair do topo e ir para a base do grid, são 7 linhas a mais.
    grid[coordinates[bunnyLine + 7][bunnyColumn]] = '🐰'
    grid = grid.join('')
  } else {
    grid = grid.split('')
    grid[coordinates[bunnyLine][bunnyColumn]] = '⬛'
    grid.splice(coordinates[bunnyLine][bunnyColumn] + 1, 1)

    // Subir uma linha é diminuir uma no índice.
    grid[coordinates[bunnyLine - 1][bunnyColumn]] = '🐰'
    grid = grid.join('')
  }

  console.log(grid)
  return grid
}
