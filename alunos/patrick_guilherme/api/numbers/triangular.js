export function triangular() {
  const triangularNumbers = []
  for (let i = 1; i < 224; i++) {
    const triangularNumber = (i * (i + 1)) / 2
    triangularNumbers.push(4 * triangularNumber + 1)
  }

  return triangularNumbers
}

console.table(triangular())
