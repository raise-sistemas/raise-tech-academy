import { cliMenu } from '../menus/cliMenu.js'
import { toggleMenu } from '../menus/toggleMenu.js'
import { removeMenu } from '../menus/removeMenu.js'
import { menuRoutes } from '../menus/menuRoutes.js'
import { menuHome } from '../menus/menuHome.js'
import { getTodoMenus } from '../menus/getTodoMenus.js'

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
    ['Toggle tarefa', toggleMenu],
    ['Remove tarefa', removeMenu],
    ['Rotas', menuRoutes], // Lista todas as rotas disponíveis
    ['Home', menuHome], // Exibe o conteúdo da Home
    ['Pegar tarefa', getTodoMenus] // Exibe o conteúdo da Home
  ]

  while (await cliMenu('TO-DO Menu', menu));
}
