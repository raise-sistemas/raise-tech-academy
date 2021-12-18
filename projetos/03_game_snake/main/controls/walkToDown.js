// import { gridtest } from '../assets/defaultGrid.js'
import { isUnder } from '../utils/isUnder.js'
import { bunnyFinder } from '../utils/bunnyFinder.js'
import { coordinates } from '../assets/indexes.js'
import { sleep } from '../functions/sleep.js'
export function walkToDown(grid) {
  const bunnyCoordinates = bunnyFinder(grid)
  const bunnyLine = bunnyCoordinates[0]
  const bunnyColumn = bunnyCoordinates[1]
  console.clear()

  if (isUnder(grid)) {
    grid = grid.split('')
    grid[coordinates[bunnyLine][bunnyColumn]] = '⬛'
    grid.splice(coordinates[bunnyLine][bunnyColumn] + 1, 1)

    // Para sair da base e ir para o topo do grid, são 7 linhas a menos.
    grid[coordinates[bunnyLine - 7][bunnyColumn]] = '🐰'
    grid = grid.join('')
  } else {
    grid = grid.split('')
    grid[coordinates[bunnyLine][bunnyColumn]] = '⬛'
    grid.splice(coordinates[bunnyLine][bunnyColumn] + 1, 1)

    // Descer uma linha é o mesmo que aumentar uma no índice.
    grid[coordinates[bunnyLine + 1][bunnyColumn]] = '🐰'
    grid = grid.join('')
  }

  console.log(grid)
  return grid
}

// walkToDown(gridtest)
