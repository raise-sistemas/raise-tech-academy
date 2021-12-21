import { isBunnyRight } from '../utils/index.js'
import { coordinates } from '../assets/indexes.js'
import { newCarrot, bunnyFinder } from '../functions/index.js'
import { imminentCarrotRight } from '../imminent-carrot/imminentCarrotRight.js'

export function goRight(game) {
  let { score, grid } = game
  const bunnyCoordinates = bunnyFinder(grid)
  const bunnyLine = bunnyCoordinates[0]
  const bunnyColumn = bunnyCoordinates[1]
  console.clear()

  if (isBunnyRight(grid) && imminentCarrotRight(grid)) {
    grid = newCarrot(grid)
    score++
    grid = grid.split('')
    grid[coordinates[bunnyLine][bunnyColumn]] = '⬛'
    grid[coordinates[bunnyLine][bunnyColumn - 11]] = 'B'
    grid = grid.join('')
  } else if (imminentCarrotRight(grid)) {
    grid = newCarrot(grid)
    score++
    grid = grid.split('')
    grid[coordinates[bunnyLine][bunnyColumn]] = '⬛'
    grid[coordinates[bunnyLine][bunnyColumn + 1]] = 'B'
    grid = grid.join('')
  } else if (isBunnyRight(grid)) {
    grid = grid.split('')
    grid[coordinates[bunnyLine][bunnyColumn]] = '⬛'
    grid[coordinates[bunnyLine][bunnyColumn - 11]] = 'B'
    grid = grid.join('')
  } else {
    grid = grid.split('')
    grid[coordinates[bunnyLine][bunnyColumn]] = '⬛'
    grid[coordinates[bunnyLine][bunnyColumn + 1]] = 'B'
    grid = grid.join('')
  }

  console.log(grid.replace('B', '🐰').replace('C', '🥕'))
  console.log(`🥕 x ${score}`)
  return { grid, score, state: game.state }
}
