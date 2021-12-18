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

  if (carrotIndexes[0] == 146 && carrotIndexes[1] == 147) {
    return carrotIndexes
  } else {
    const finder = coordinates.map(element => element.indexOf(carrotIndexes[0]))
    const column = finder.find(element => element !== -1)
    const line = finder.indexOf(column)
    const carrotCoordinates = [line, column]
    return carrotCoordinates
  }
}
