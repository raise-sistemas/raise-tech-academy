import { isBunnyUpper, bunnyFinder, carrotFinder } from '../utils/index.js'
import { coordinates } from '../assets/indexes.js'
import { newCarrot } from '../functions/newCarrot.js'
import {imminentCarrotUp} from '../imminent-carrot/imminentCarrotUp.js'

export function goUp(grid) {
  const bunnyCoordinates = bunnyFinder(grid)
  const bunnyLine = bunnyCoordinates[0]
  const bunnyColumn = bunnyCoordinates[1]
  console.clear()

  // Sempre que tiver uma cenoura iminente, a função newCarrot precisa ser chamada, pra apagar a cenoura e gerar outra.
  if (isBunnyUpper(grid) && imminentCarrotUp(grid)) {
    grid = newCarrot(grid)
    grid = grid.split('')
    grid[coordinates[bunnyLine][bunnyColumn]] = '⬛'
    grid[coordinates[bunnyLine + 7][bunnyColumn]] = 'B'
    grid = grid.join('')
  } else if (imminentCarrotUp(grid)) {
    grid = newCarrot(grid)
    grid = grid.split('')
    grid[coordinates[bunnyLine][bunnyColumn]] = '⬛'
    grid[coordinates[bunnyLine - 1][bunnyColumn]] = 'B'
    grid = grid.join('')
  } else if (isBunnyUpper(grid)) {
    grid = grid.split('')
    grid[coordinates[bunnyLine][bunnyColumn]] = '⬛'
    grid[coordinates[bunnyLine + 7][bunnyColumn]] = 'B'
    grid = grid.join('')
  } else {
    grid = grid.split('')
    grid[coordinates[bunnyLine][bunnyColumn]] = '⬛'
    grid[coordinates[bunnyLine - 1][bunnyColumn]] = 'B'
    grid = grid.join('')
  }

  console.log(grid.replace('B', '🐰').replace('C', '🥕'))
  return grid
}
