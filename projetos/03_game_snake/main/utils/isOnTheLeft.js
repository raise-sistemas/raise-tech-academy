import { coordinates } from '../assets/indexes.js'
import { bunnyFinder } from '../functions/bunnyFinder.js'

export function isOnTheLeft(grid) {
  let finder = false
  const bunnyCoordinates = bunnyFinder(grid)
  const bunnyIndex = coordinates[bunnyCoordinates[0]][bunnyCoordinates[1]]

  for (let i = 29; i <= 134; i = i + 15) {
    if (bunnyIndex == i) {
      finder = true
      break
    }
  }
  return finder
}
