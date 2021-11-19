export function intSquareRoot() {
  const int = []
  for (let i = 0; i < 1000000; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      int.push(i)
    }
  }
  return int
}

console.log(intSquareRoot())
