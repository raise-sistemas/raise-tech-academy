import { carrotFinder } from '../utils/carrotFinder.js'

export function eraseCarrot(grid) {
  const carrotIndex = carrotFinder(grid)
  grid = grid.split('')
  grid[carrotIndex[0]] = '⬛'
  grid.splice(carrotIndex[1], 1)
  grid = grid.join('')
  return grid
}
