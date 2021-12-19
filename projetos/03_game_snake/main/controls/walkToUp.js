import { isUpper, bunnyFinder, carrotFinder } from '../utils/index.js'
import { coordinates } from '../assets/indexes.js'
import { newCarrot } from '../functions/newCarrot.js'
import { imminentCarrotUp } from '../functions/imminentCarrotUp.js'

export function walkToUp(grid) {
  const bunnyCoordinates = bunnyFinder(grid)
  const bunnyLine = bunnyCoordinates[0]
  const bunnyColumn = bunnyCoordinates[1]
  const carrotPosition = carrotFinder(grid)
  console.clear()

  // Se o coelho estiver no topo e a cenoura estiver onde o coelho vai estar no próximo passo, a função newCarrot precisa ser chamada
  if (isUpper(grid) && imminentCarrotUp(grid)) {
    grid = newCarrot(grid)
    grid = grid.split('')
    grid[coordinates[bunnyLine][bunnyColumn]] = '⬛'
    grid.splice(coordinates[bunnyLine][bunnyColumn] + 1, 1)
    console.log(carrotPosition)
    console.log(bunnyCoordinates)
    grid[coordinates[bunnyLine + 7][bunnyColumn]] = '🐰'
    grid = grid.join('')
    
  } else if (isUpper(grid)) {
    grid = grid.split('')
    grid[coordinates[bunnyLine][bunnyColumn]] = '⬛'
    grid.splice(coordinates[bunnyLine][bunnyColumn] + 1, 1)
    console.log(carrotPosition)
    console.log(bunnyCoordinates)
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
    console.log(carrotPosition)
    console.log(bunnyCoordinates)
  }

  console.log(grid)
  return grid
}
