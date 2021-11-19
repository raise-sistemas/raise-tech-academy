export function even() {
  const even = []
  while (even.length < 10) {
    const number = Math.round(Math.random() * 1000000)
    if (number % 2 == 0) {
      even.push(number)
    }
  }
  return even
}

console.log(even())
