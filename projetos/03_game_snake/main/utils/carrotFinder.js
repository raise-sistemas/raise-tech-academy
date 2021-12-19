import { coordinates } from '../assets/indexes.js'

export function carrotFinder(grid) {
  grid = grid.split('')
  const carrotIndexes = []

  for (let index = 29; index < 147; index++) {
    if (grid[index] + grid[index + 1] == '🥕') {
      carrotIndexes.push(index, index + 1)
      break
    }
  }

  const finder = coordinates.map(element => element.indexOf(carrotIndexes[0]))
  const column = finder.find(element => element !== -1)
  const line = finder.indexOf(column)
  const carrotCoordinates = [line, column]

  if (column > 11 || String(column) == 'undefined') {
    return carrotIndexes
  } else {
    return carrotCoordinates
  }
}
