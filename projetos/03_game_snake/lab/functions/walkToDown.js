import { gridFromLeft } from '../assets/defaultGrid.js'
import { emptyGrid } from '../assets/defaultGrid.js'
import { bunnyFinder } from './bunnyFinder.js'

export function walkToDown(grid) {
  let interval = 150
  grid = gridFromLeft
  // Importante lembrar que esse gridFromLeft tá aqui só pra testar a função, ele precisa sair depois
  let index = bunnyFinder(grid)[0]

  setInterval(() => {
    console.clear()
    console.log(grid)

    grid = grid.split('')

    if (grid[index] + grid[index + 1] == '🐰') {
      grid[index] = '⬛'
      grid.splice(index + 1, 1)
      grid[index + 15] = '🐰'
      grid = grid.join('')
    }
    console.log(index)
    if (index == 134) {
      grid = gridFromLeft
      index = 29
      grid = emptyGrid.split('')
      grid[29] = '🐰'
      grid = grid.join('')
    } else {
      index += 15
    }
  }, interval)
}

walkToDown()
