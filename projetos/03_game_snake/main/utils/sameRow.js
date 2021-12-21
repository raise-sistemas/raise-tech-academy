import { bunnyFinder, carrotFinder } from '../functions/index.js'

export function sameRow(grid) {
  const bunnyLine = bunnyFinder(grid)[0]
  const carrotLine = carrotFinder(grid)[0]

  if (bunnyLine === carrotLine) {
    return true
  } else {
    return false
  }
}
