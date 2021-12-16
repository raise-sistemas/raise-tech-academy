import { bunnyFinder } from './bunnyFinder.js'

export function isUnder(grid) {
  let finder = false
  const bunnyIndex = bunnyFinder(grid)[0]
  for (let i = 134; i <= 145; i++) {
    if (bunnyIndex == i) {
      finder = true
      break
    }
  }
  return finder
}
