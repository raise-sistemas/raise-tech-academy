import { bunnyFinder, carrotFinder } from '../functions/index.js'

export function sameColumn(grid) {
  const bunnyColumn = bunnyFinder(grid)[1]
  const carrotColumn = carrotFinder(grid)[1]

  if (bunnyColumn === carrotColumn) {
    return true
  } else {
    return false
  }
}
