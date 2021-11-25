import { cliMenu } from "../menus/cliMenu.js";
import { toggleMenu } from "../menus/toggleMenu.js";
import { removeMenu, removeCompletedMenu } from "../menus/removeMenu.js";
import { menuRoutes } from "../menus/menuRoutes.js";
import { menuHome } from "../menus/menuHome.js";
import { getTodoMenus } from "../menus/getTodoMenus.js";
import { updateTodo } from "../menus/updateMenu.js";
import { addTodoMenu } from "../menus/addTodoMenu.js";
import { todosMenu } from "../menus/todosMenu.js";
import { menuListTodos } from "../menus/menuListTodos.js";
import { menuGetTodo } from "../menus/menuGetTodo.js";

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
    ["Home", menuHome], // Exibe o conteúdo da Home
    ["Rotas", menuRoutes], // Lista todas as rotas disponíveis
    ["Adiciona tarefa", addTodoMenu], // Pega a tarefa pelo ID
    ["Listar Todos", menuListTodos],
    ["Listar Tarefas", todosMenu], // Lista todas as tarefas
    ["Get todos", menuGetTodo],
    ["Pegar tarefa", getTodoMenus], // Pega a tarefa pelo ID
    ["Update Todo", updateTodo],
    ["Toggle tarefa", toggleMenu], // Alterar tarefa.
    ["Remover tarefa", removeMenu], // Remove uma tarefa da lista.
    ["Remover tarefas concluídas", removeCompletedMenu], // Remove as tarefas finalizadas.
  ];

  while (await cliMenu("TO-DO Menu", menu));
}
