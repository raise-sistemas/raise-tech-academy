import { coordinates } from '../assets/indexes.js'

export function carrotFinder(grid) {
  let carrotIndex

  for (let index = 29; index < 147; index++) {
    if (grid[index] === 'B') {
      carrotIndex = index
      break
    }
  }

  const finder = coordinates.map(element => element.indexOf(carrotIndex))
  const column = finder.find(element => element !== -1)
  const line = finder.indexOf(column)

  return [line, column]
}
