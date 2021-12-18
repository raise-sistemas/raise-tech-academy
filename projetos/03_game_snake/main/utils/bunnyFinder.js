import { coordinates } from '../assets/indexes.js'

export function bunnyFinder(grid) {
  grid = grid.split('')
  const bunnyIndexes = []

  for (let index = 29; index < 145; index++) {
    if (grid[index] + grid[index + 1] == '🐰') {
      bunnyIndexes.push(index, index + 1)
      break
    }
  }

  const finder = coordinates.map(element => element.indexOf(bunnyIndexes[0]))
  const column = finder.find(element => element !== -1)
  const line = finder.indexOf(column)
  const bunnyCoordinates = [line, column]

  return bunnyCoordinates
}
