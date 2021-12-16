import { bunnyFinder } from './bunnyFinder.js'

export function isOnTheRight(grid) {
  let finder = false
  const bunnyIndex = bunnyFinder(grid)[0]
  for (let i = 40; i <= 145; i = i + 15) {
    if (bunnyIndex == i) {
      finder = true
      break
    }
  }
  return finder
}
