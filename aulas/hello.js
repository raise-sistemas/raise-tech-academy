import genres from "./genres.js"
import { log } from "./log.js"

function choose(label, options) {
  console.clear()
  console.table(options)

  const ultimo = options.length - 1
  const option = prompt(label + ` (0 à ${ultimo} ou ENTER para voltar):`)

  if (option === null) return null
  if (Number.isNaN(+option)) return null

  return options[Math.min(+option, ultimo)]
}
setInterval(() => {
  console.log("INTERVAL")
}, 1000);

console.log( choose("Qual o gênero?", genres) )
// prompt("Foo")
// console.clear()
// console.table(genres, ["name"])
// prompt("Bar")
// function log(data) {
//   console.log(JSON.stringify(data));
// }

// const resposta = await (await fetch("https://httpbin.org/uuid")).json();
// log(resposta);

// const log = data => console.log(JSON.stringify(data))

// console.log("Hello World!")
// alert("ALERTA!")
// const excluir = confirm("Tem certeza?")
// console.log(excluir)
// const idade = +prompt("Digite sua idade:")
// setInterval(() => log("FIM"), 1_000)
// console.log("DEPOIS!")

// let idade

// do {
//   idade = +prompt("Digite sua idade:")
// } while (idade <= 0 || Number.isNaN(idade))

// if (idade >= 18) {
//   log("Acesso Permitido")
// } else {
//   log("Acesso Negado!")
// }
