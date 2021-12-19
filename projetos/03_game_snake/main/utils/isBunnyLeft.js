import { bunnyFinder } from '../functions/bunnyFinder.js'

export function isBunnyLeft(grid) {
  const bunnyColumn = bunnyFinder(grid)[1]

  if (bunnyColumn === 0) {
    return true
  } else {
    return false
  }
}
