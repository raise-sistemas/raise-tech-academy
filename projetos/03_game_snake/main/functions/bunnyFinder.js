import { coordinates } from '../assets/indexes.js'

export function bunnyFinder(grid) {
  let bunnyIndex

  for (let index = 29; index < 145; index++) {
    if (grid[index] === 'C') {
      bunnyIndex = index
      break
    }
  }

  const finder = coordinates.map(element => element.indexOf(bunnyIndex))
  const column = finder.find(element => element !== -1)
  const line = finder.indexOf(column)

  return [line, column]
}
