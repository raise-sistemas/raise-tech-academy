import { addTodo, getTodo, listTodos, toggleTodo, removeTodo } from "./todo-lib.js";
import { htmlResponse } from "./utils/htmlResponse.js";
import { routes } from "./routes.js";

export function rootAction() {
  const body = "<h1>TODO API</h1>";
  return htmlResponse(body);
}

export function routesAction() {
  return routes.toArray();
}

export function listTodosAction() {
  return listTodos();
}

export async function addTodoAction(request) {
  const { title } = await request.json();
  return addTodo(title);
}

export function getTodoAction(request, { id }) {
  const url = new URL(request.url);
  id = id || url.searchParams.get("id");
  return getTodo(id);
}

export function toggleTodoAction(request, { id }) {
  const url = new URL(request.url);
  id = id || url.searchParams.get("id")
  return toggleTodo(id);
}

export async function updateTodoAction(request, { id }) {
  const url = new URL(request.url);
  const { title } = await request.json();
  id = id || url.searchParams.get("id")
  return updateTodo(id, title);
}


export function removeTodoAction(request, { id }) {
  const url = new URL(request.url);
  id = id || url.searchParams.get("id")
  return removeTodo(id);
}
