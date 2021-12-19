import { coordinates } from '../assets/indexes.js'
import { bunnyFinder } from '../utils/bunnyFinder.js'

export function eraseBunny(grid) {
  const bunnyCoordinates = bunnyFinder(grid)
  const bunnyLine = bunnyCoordinates[0]
  const bunnyColumn = bunnyCoordinates[1]

  grid = grid.split('')
  grid[coordinates[bunnyLine][bunnyColumn]] = '⬛'
  grid.splice(coordinates[bunnyLine][bunnyColumn] + 1, 1)

  return grid
}
