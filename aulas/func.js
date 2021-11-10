function soma(...numeros) {
  // let soma = 0
  // for (let i = 0; i < numeros.length; i++) {
  //   soma += numeros[i]
  // }
  // return soma

  // let soma = 0
  // numeros.forEach(n => soma += n)
  // return soma

  return numeros.reduce((a, b) => a + b)
}

function somaRecursiva(...numeros) {
  if (numeros.length === 0) return 0
  return numeros[0] + somaRecursiva(...numeros.slice(1))
}

console.log(somaRecursiva(2, 3))
// soma(2, 3, 5, 10, 20, 50, 200, 1000)
// soma(2, soma(3, 5, 10, 20, 50, 200, 1000))
// soma(2, soma(3, soma(5, 10, 20, 50, 200, 1000)))
