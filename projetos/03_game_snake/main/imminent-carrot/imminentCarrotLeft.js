import { isBunnyLeft } from '../utils/index.js'
import { bunnyFinder, carrotFinder } from '../functions/index.js'

export function imminentCarrotLeft(grid) {
  const bunnyIndex = bunnyFinder(grid)
  const bunnyLine = bunnyIndex[0]
  const bunnyColumn = bunnyIndex[1]

  const carrotPosition = carrotFinder(grid)
  const carrotLine = carrotPosition[0]
  const carrotColumn = carrotPosition[1]

  if (isBunnyLeft(grid) && carrotLine === bunnyLine && carrotColumn === 11) {
    return true
  } else if (bunnyLine === carrotLine && carrotColumn + 1 === bunnyColumn) {
    return true
  } else {
    return false
  }
}
