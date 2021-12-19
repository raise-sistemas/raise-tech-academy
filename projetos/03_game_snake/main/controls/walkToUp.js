import { isUpper, bunnyFinder, carrotFinder } from '../utils/index.js'
import { coordinates } from '../assets/indexes.js'
import { newCarrot } from '../functions/newCarrot.js'
import { imminentCarrotUp } from '../functions/imminentCarrotUp.js'
import { eraseBunny } from '../functions/eraseBunny.js'

export function walkToUp(grid) {
  const bunnyCoordinates = bunnyFinder(grid)
  const bunnyLine = bunnyCoordinates[0]
  const bunnyColumn = bunnyCoordinates[1]
  const carrotCoordinates = carrotFinder(grid)
  const carrotLine = carrotCoordinates[0]
  const carrotColumn = carrotCoordinates[1]
  console.clear()

  // Se o coelho estiver no topo e a cenoura estiver onde o coelho vai estar no próximo passo, a função newCarrot precisa ser chamada
  if (isUpper(grid) && imminentCarrotUp(grid)) {
    grid = newCarrot(grid)
    grid = eraseBunny(grid)
    grid[coordinates[bunnyLine + 7][bunnyColumn + 1]] = '🐰'
    grid = grid.join('')
  }
  else if (imminentCarrotUp(grid)) {
    grid = newCarrot(grid)
    grid = eraseBunny(grid)

    // Quando o coelho tá embaixo da cenoura, e na mesma coluna, é tido como uma coluna a mais, então dominuir uma, corrige.
    grid[coordinates[bunnyLine + 7][bunnyColumn - 1]] = '🐰' 
    grid = grid.join('')
  } else if (isUpper(grid)) {
    grid = eraseBunny(grid)
    // Para sair do topo e ir para a base do grid, são 7 linhas a mais.
    // Tem um bug de indexação que faz o coelho, quando tá no topo, e antes da cenoura, ir uma coluna para a esquerda. Somar uma coluna, conserta esse bug.
    if (carrotColumn > bunnyColumn && carrotLine != 7) {
      grid[coordinates[bunnyLine + 7][bunnyColumn + 1]] = '🐰'
      grid = grid.join('')
    } else if (carrotColumn <= bunnyColumn && carrotLine != bunnyLine) {
      grid[coordinates[bunnyLine + 7][bunnyColumn + 1]] = '🐰'
      grid = grid.join('')
    } else {
      grid[coordinates[bunnyLine + 7][bunnyColumn]] = '🐰'
      grid = grid.join('')
    }
  } else {
    grid = eraseBunny(grid)
    // E tem outro bug de quando o coelho tá na mesma linha que a cenoura. Que vai um passo para a direita.
    // Diminuir 1 na coluna, resolve isso.
    if (bunnyLine - 1 == carrotLine && bunnyColumn <= carrotColumn) {
      grid[coordinates[bunnyLine - 1][bunnyColumn - 1]] = '🐰'
      grid = grid.join('')
    }
    // O mesmo bug acontece quando o coelho está do outro lado, mas na mesma linha.
    else if (bunnyLine == carrotLine && bunnyColumn > carrotColumn) {
      grid[coordinates[bunnyLine - 1][bunnyColumn - 1]] = '🐰'
      grid = grid.join('')
    } else {
      grid[coordinates[bunnyLine - 1][bunnyColumn]] = '🐰'
      grid = grid.join('')
    }
  }

  console.log(bunnyCoordinates)
  console.log(carrotCoordinates)

  console.log(grid)
  return grid
}
