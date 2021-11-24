// Importar "listarTodo" e fornecer o índice para remover. (?)
import {  } from "./";
import { routes } from "./routes.js";

export async function menuRemoveTodo(id) {
    await routes.delete(`/todos/${id}/remove`, actions.removeTodoAction);
}