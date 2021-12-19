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
    grid = grid.replace('🥕', '🐰')
    grid = newCarrot(grid)
    grid = grid.split('')
    grid[coordinates[bunnyLine][bunnyColumn]] = '⬛'
    grid.splice(coordinates[bunnyLine][bunnyColumn] + 1, 1)
    // Bugfix
    grid.splice(coordinates[bunnyLine - 1][bunnyColumn - 1], 1)

    grid = grid.join('')
  } else if (imminentCarrotUp(grid)) {
    grid = grid.replace('🥕', '🐰')
    grid = newCarrot(grid)
    grid = grid.split('')
    grid[coordinates[bunnyLine][bunnyColumn]] = '⬛'
    grid.splice(coordinates[bunnyLine][bunnyColumn] + 1, 1)

    grid = grid.join('')
  } else if (isUpper(grid)) {
    grid = grid.split('')
    grid[coordinates[bunnyLine][bunnyColumn]] = '⬛'
    grid.splice(coordinates[bunnyLine][bunnyColumn] + 1, 1)

    // Para sair do topo e ir para a base do grid, são 7 linhas a mais.
    grid[coordinates[bunnyLine + 7][bunnyColumn + 1]] = '🐰'
    grid = grid.join('')
  } else {
    grid = grid.split('')

    // Garantindo que o índice do coelho veio como coordenadas:

    if (bunnyLine <= 7) {
      grid[coordinates[bunnyLine][bunnyColumn]] = '⬛'
      grid.splice(coordinates[bunnyLine][bunnyColumn] + 1, 1)
    } else {
      grid[bunnyLine[0]] = '⬛'
      grid.splice(bunnyLine + 1, 1)
    }

    if (bunnyLine - 1 == carrotPosition[0] && bunnyColumn < carrotPosition[1]) {
      grid[coordinates[bunnyLine - 1][bunnyColumn - 1]] = '🐰'
      grid = grid.join('')
    } else if ( 

    // O código tá chegando aqui e recebendo como retorno o índex o coelho, 146
    
      coordinates[bunnyLine - 1][bunnyColumn] <
        coordinates[carrotPosition[0]][carrotPosition[1]] &&
      bunnyColumn > carrotPosition[1]
    ) {
      grid[coordinates[bunnyLine - 1][bunnyColumn - 1]] = '🐰'
      grid = grid.join('')
    } else {
      // Subir uma linha é diminuir uma no índice.
      grid[coordinates[bunnyLine - 1][bunnyColumn]] = '🐰'
      grid = grid.join('')
    }
  }

  console.log(grid)
  return grid
}
