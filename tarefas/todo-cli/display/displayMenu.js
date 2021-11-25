import { cliMenu } from "../menus/cliMenu.js";
import { toggleMenu } from "../menus/toggleMenu.js";

// Cada entrada do menu é um array com o título da entrada na posição 0 e a referência
// a função na posição 1
/*  Exemplo:(mesma maneira utilizada no projeto denoflix)
  const menu = [
    ["titulo1", funçao1],
    ["titulo2", função2],
    ...
    ["tituloN", funçãoN]
  ]
*/
export async function displayMenu() {
  const menu = [
    //entradas de teste, o primeiro a adicionar as funções pode remover os foo
    ["Toggle tarefa", toggleMenu], // Add função.
    ["foo2", () => console.log("foo2")],
  ];

  while (await cliMenu("-=<[ TO-DO Menu ]>=-", menu));
}
