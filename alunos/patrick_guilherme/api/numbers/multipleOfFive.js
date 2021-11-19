export function multipleOfFive() {
  const multipleOfFive = []
  for (let i = 5; i <= 1000000; i++) {
    if (Number.isInteger(i / 5)) {
      multipleOfFive.push(i)
    }
  }
  return multipleOfFive
}

console.log(multipleOfFive())
