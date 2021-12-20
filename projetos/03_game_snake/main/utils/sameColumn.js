import { bunnyFinder, carrotFinder } from '../functions/index.js'

export function sameColumn(grid) {
  const bunnyCoordinates = bunnyFinder(grid)
  const carrotCoordinates = carrotFinder(grid)

  if (bunnyCoordinates[1] === carrotCoordinates[1]) {
    return true
  }
  else {
    return false
  }
}
