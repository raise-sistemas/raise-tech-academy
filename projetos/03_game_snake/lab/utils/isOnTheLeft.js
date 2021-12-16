import { bunnyFinder } from './bunnyFinder.js'

export function isOnTheLeft(grid) {
  let finder = false
  const bunnyIndex = bunnyFinder(grid)[0]
  for (let i = 29; i <= 134; i = i + 15) {
    if (bunnyIndex == i) {
      finder = true
      break
    }
  }
  return finder
}

