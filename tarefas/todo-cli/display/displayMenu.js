import { cliMenu } from "../menus/cliMenu.js";
import { toggleMenu } from "../menus/toggleMenu.js";
<<<<<<< HEAD
import { updateTodo } from "../menus/updateMenu.js";
=======
import { removeMenu } from "../menus/removeMenu.js";
import { menuRoutes } from '../menus/menuRoutes.js';
import { menuHome } from '../menus/menuHome.js';
>>>>>>> 7a5c702c7cfd5418b3ebdaa04804f9187bb2e550

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
<<<<<<< HEAD
    ["Toggle tarefa", toggleMenu], // Add função.
    ["foo2", () => console.log("foo2")],
    ["Update Todo", updateTodo]
=======
    ["Toggle tarefa", toggleMenu],
    ["Remove tarefa", removeMenu],
    ["Rotas", menuRoutes], // Lista todas as rotas disponíveis
    ["Home", menuHome], // Exibe o conteúdo da Home
>>>>>>> 7a5c702c7cfd5418b3ebdaa04804f9187bb2e550
  ];

  while (await cliMenu("TO-DO Menu", menu));
}
