import { coordinates } from '../assets/indexes.js'
import { carrotFinder } from '../utils/carrotFinder.js'

export function eraseCarrot(grid) {
  const carrotCoordinates = carrotFinder(grid)
  const carrotLine = carrotCoordinates[0]
  const carrotColumn = carrotCoordinates[1]

  grid = grid.split('')
  grid[coordinates[carrotLine][carrotColumn]] = '⬛'
  grid.splice(coordinates[carrotLine][carrotColumn] + 1, 1)
  return grid
}
