import { bunnyFinder } from './bunnyFinder.js'
import { coordinates } from '../assets/indexes.js'

export function isUnder(grid) {
  let finder = false
  const bunnyCoordinates = bunnyFinder(grid)
  const bunnyIndex = coordinates[bunnyCoordinates[0]][bunnyCoordinates[1]]

  for (let i = 134; i <= 145; i++) {
    if (bunnyIndex == i) {
      finder = true
      break
    }
  }
  return finder
}
