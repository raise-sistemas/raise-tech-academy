export function perfect() {
  const list = []
  for (let i = 1; i < 500; i++) {
    let soma = 0
    for (let j = 1; j < i; j++)
      if (i % j == 0) {
        soma += j
      }
    if (i == soma) {
      list.push(i)
    }
    return list
  }
}

console.log(perfect())
