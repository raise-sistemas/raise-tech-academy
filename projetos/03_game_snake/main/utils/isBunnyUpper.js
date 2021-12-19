import { bunnyFinder } from '../functions/bunnyFinder.js'

export function isBunnyUpper(grid) {
  let finder = false
  const bunnyLine = bunnyFinder(grid)[0]

  if (bunnyLine === 0) {
    finder = true
  }
  return finder
}
