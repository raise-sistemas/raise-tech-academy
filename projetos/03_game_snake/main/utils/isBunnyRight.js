import { bunnyFinder } from '../functions/bunnyFinder.js'

export function isBunnyRight(grid) {
  const bunnyColumn = bunnyFinder(grid)[1]

  if (bunnyColumn === 11) {
    return true
  } else {
    return false
  }
}
