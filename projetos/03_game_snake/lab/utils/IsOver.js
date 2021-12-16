import { bunnyFinder } from './bunnyFinder.js'

export function isOver(grid) {
  let finder = false
  const bunnyIndex = bunnyFinder(grid)[0]
  for (let i = 29; i <= 40; i++) {
    if (bunnyIndex == i) {
      finder = true
      break
    }
  }
  return finder
}
