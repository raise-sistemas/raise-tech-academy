import { bunnyFinder } from '../functions/bunnyFinder.js'

export function isBunnyUnder(grid) {
  const bunnyColumn = bunnyFinder(grid)[0]

  if (bunnyColumn === 7) {
    return true
  } else {
    return false
  }
}
