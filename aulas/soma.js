export function soma(...numeros) {
  return numeros.reduce((a, b) => a + b, 0);

  // let soma = 0
  // numeros.forEach(n => soma += n)
  // return soma

  // let soma = 0
  // for (let i = 0; i < numeros.length; i++) {
  //   soma += numeros[i]
  // }
  // return soma

  // let soma = 0
  // for (let i = numeros.length - 1; i >= 0; i--) {
  //   soma += numeros[i]
  // }
  // return soma
}
