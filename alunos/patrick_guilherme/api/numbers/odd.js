export function odd() {
  const odd = []
  while (odd.length < 10) {
    const number = Math.round(Math.random() * 1000000)
    if (number % 2 !== 0) {
      odd.push(number)
    }
  }
  return odd
}

console.log(odd())
