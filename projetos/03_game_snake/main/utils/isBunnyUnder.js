import { bunnyFinder } from '../functions/bunnyFinder.js'

export function isBunnyUnder(grid) {
  const bunnyLine = bunnyFinder(grid)[0]

  if (bunnyLine > 6) {
    return true
  } else {
    return false
  }
}
