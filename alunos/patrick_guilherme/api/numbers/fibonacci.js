export function fibonacci() {
  const fibonacci = [1, 1]
  let firstReference = 0
  let secondReference = 1

  for (let i = 0; i < 28; i++) {
    fibonacci.push(fibonacci[firstReference] + fibonacci[secondReference])
    firstReference += 1
    secondReference += 1
  }

  return fibonacci
}

console.log(fibonacci())
