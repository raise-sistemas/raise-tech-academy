import { coordinates } from '../assets/indexes.js'
import { carrotFinder } from '../utils/carrotFinder.js'

export function eraseCarrot(grid) {
  const carrotPosition = carrotFinder(grid)

  // Esse if é pra o caso da cenoura estar na última posição do grid.
  if (carrotPosition[0] == 146) {
    const carrotIndex = carrotPosition[0]
    grid = grid.split('')
    grid[carrotIndex] = '⬛'
    grid.splice(carrotIndex + 1, 1)
    grid = grid.join('')
  } else {
    const carrotLine = carrotPosition[0]
    const carrotColumn = carrotPosition[1]
    grid = grid.split('')
    grid[coordinates[carrotLine][carrotColumn]] = '⬛'
    grid.splice(coordinates[carrotLine][carrotColumn] + 1, 1)
    grid = grid.join('')
  }

  return grid
}
