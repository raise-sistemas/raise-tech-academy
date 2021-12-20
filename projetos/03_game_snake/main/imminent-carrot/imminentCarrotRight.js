import { bunnyFinder, carrotFinder } from '../functions/index.js'
import {isBunnyRight } from '../utils/index.js'

export function imminentCarrotRight(grid) {
  const bunnyIndex = bunnyFinder(grid)
  const bunnyLine = bunnyIndex[0]
  const bunnyColumn = bunnyIndex[1]

  const carrotPosition = carrotFinder(grid)
  const carrotLine = carrotPosition[0]
  const carrotColumn = carrotPosition[1]

  if (isBunnyRight(grid) && carrotLine === bunnyLine && carrotColumn === 0) {
    return true
  } else if (bunnyColumn === carrotColumn && carrotLine + 1 === bunnyLine) {
    return true
  } else {
    return false
  }
}
