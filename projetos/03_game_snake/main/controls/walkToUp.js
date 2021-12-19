import { isUpper, bunnyFinder, carrotFinder } from '../utils/index.js'
import { coordinates } from '../assets/indexes.js'
import { newCarrot } from '../functions/newCarrot.js'
import { imminentCarrotUp } from '../functions/imminentCarrotUp.js'
import { eraseBunny } from '../functions/eraseBunny.js'

export function walkToUp(grid) {
  const bunnyCoordinates = bunnyFinder(grid)
  const bunnyLine = bunnyCoordinates[0]
  const bunnyColumn = bunnyCoordinates[1]
  console.clear()

  // Se o coelho estiver no topo e a cenoura estiver onde o coelho vai estar no próximo passo, a função newCarrot precisa ser chamada
  if (isUpper(grid) && imminentCarrotUp(grid)) {
    grid = grid.replace('🥕', '🐰')
    grid = newCarrot(grid)
    grid = eraseBunny(grid)
    grid = grid.join('')
  } else if (imminentCarrotUp(grid)) {
    grid = grid.replace('🥕', '🐰')
    grid = newCarrot(grid)
    grid = eraseBunny(grid)
    grid = grid.join('')
  } else if (isUpper(grid)) {
    grid = eraseBunny(grid)
    // Para sair do topo e ir para a base do grid, são 7 linhas a mais.
    grid[coordinates[bunnyLine + 7][bunnyColumn]] = '🐰'
    grid = grid.join('')
  } else {
    grid = eraseBunny(grid)
    grid[coordinates[bunnyLine - 1][bunnyColumn]] = '🐰'
    grid = grid.join('')
  }

  console.log(grid)
  return grid
}
