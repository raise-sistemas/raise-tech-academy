import { isBunnyUnder } from '../utils/index.js'
import { coordinates } from '../assets/indexes.js'
import { newCarrot, bunnyFinder } from '../functions/index.js'

export function goDown(game) {
  let { grid, score } = game
  const bunnyCoordinates = bunnyFinder(grid)
  const bunnyLine = bunnyCoordinates[0]
  const bunnyColumn = bunnyCoordinates[1]
  console.clear()

  if (isBunnyUnder(grid)) {
    grid = grid.split('')
    grid[coordinates[bunnyLine][bunnyColumn]] = '⬛'
    grid[coordinates[bunnyLine - 7][bunnyColumn]] = 'B'
    grid = grid.join('')
  } else {
    grid = grid.split('')
    grid[coordinates[bunnyLine][bunnyColumn]] = '⬛'
    grid[coordinates[bunnyLine + 1][bunnyColumn]] = 'B'
    grid = grid.join('')
  }

  console.log(grid.replace('B', '🐰').replace('C', '🥕'))
  return { grid, score, state: game.state }
}
