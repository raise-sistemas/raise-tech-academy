import { bunnyFinder, carrotFinder } from '../functions/index.js'

export function sameRow(grid) {
  const bunnyCoordinates = bunnyFinder(grid)
  const carrotCoordinates = carrotFinder(grid)

  if (bunnyCoordinates[0] === carrotCoordinates[0]) {
    return true
  } else {
    return false
  }
}
