
export function bunnyFinder(grid) {
  grid = grid.split('')
  let finder = []
  for (let index = 29; index < 145; index++) {
    if (grid[index] + grid[index + 1] == '🐰') {
      finder.push(index, index + 1)
      break
    }
  }
  return finder
}