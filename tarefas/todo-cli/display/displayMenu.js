import { cliMenu } from "../menus/cliMenu.js";
import { toggleMenu } from "../menus/toggleMenu.js";
import { menuRoutes } from '../menus/menuRoutes.js';
import { menuHome } from '../menus/menuHome.js';

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
    ["Rotas", menuRoutes], // Lista todas as rotas disponíveis
    ["Home", menuHome], // Exibe o conteúdo da Home
    ["Toggle tarefa", toggleMenu], // Add função.
  ];

  while (await cliMenu("-=<[ TO-DO Menu ]>=-", menu));
}
