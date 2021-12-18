import { bunnyFinder } from '../utils/bunnyFinder.js'
import { carrotFinder } from '../utils/carrotFinder.js'
import { isOver } from '../utils/IsOver.js'
import { newCarrot } from '../functions/newCarrot.js'

// import { gridFromBottom } from '../assets/defaultGrid.js'

export function walkToUp(grid) {
  const index = bunnyFinder(grid)[0]
  const carrotIndex = carrotFinder(grid)
  console.clear()

  // Caso esteja no topo, vai voltar pra embaixo.
  if (
    (isOver(grid) && carrotIndex[0] == index + 105) ||
    (isOver(grid) && carrotIndex[1] == index + 105)
  ) {
    console.log(carrotIndex)
    console.log(isOver(grid))
    grid = newCarrot(grid)
    grid = grid.split('')
    grid[index] = '⬛'
    grid.splice(index + 1, 1)
    grid[index + 105] = '🐰'
    grid = grid.join('')
    console.log(index)
  }

  // Caso esteja no topo e a cenoura esteja na base da mesma coluna:, vai gerar uma nova cenoura, e o coelho vai pra onde ela tava.
  else if (isOver(grid)) {
    grid = grid.split('')
    grid[index] = '⬛'
    grid.splice(index + 1, 1)
    grid[index + 105] = '🐰'
    grid = grid.join('')
    console.log(index)
  }

  // Caso esteja embaixo da cenoura, gera uma nova, e o coelho anda pra cima
  else if (index - 15 == carrotIndex[0] || index - 15 == carrotIndex[1]) {
    grid = newCarrot(grid)
    grid = grid.split('')
    grid[index] = '⬛'
    grid.splice(index + 1, 1)
    grid[index - 15] = '🐰'
    grid = grid.join('')
    console.log(index)
  } else {
    grid = grid.split('')
    grid[index] = '⬛'
    grid.splice(index + 1, 1)
    grid[index - 15] = '🐰'
    grid = grid.join('')
    console.log(index)
  }

  // setTimeout(() => {
  console.log(grid)
  return grid
}

// walkToUp()
