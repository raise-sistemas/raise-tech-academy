import { coordinates } from '../assets/indexes.js'
import { bunnyFinder } from './bunnyFinder.js'

export function isOnTheRight(grid) {
  let finder = false
  const bunnyCoordinates = bunnyFinder(grid)
  const bunnyIndex = coordinates[bunnyCoordinates[0]][bunnyCoordinates[1]]

  for (let i = 40; i <= 145; i = i + 15) {
    if (bunnyIndex == i) {
      finder = true
      break
    }
  }
  return finder
}
