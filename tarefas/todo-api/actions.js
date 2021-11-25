import {
  addTodo,
  getTodo,
  listTodos,
  listTodosCompleted,
  removeTodo,
  toggleTodo,
  updateTodo,
} from "./todo-lib.js";
import { htmlResponse } from "./utils/htmlResponse.js";
import { routes } from "./routes.js";

export function rootAction() {
  const body = `
<h1>TODO API</h1>
<a href="/todos/new">Novo Todo</a>
`;
  return htmlResponse(body);
}

export async function createTodoAction(request) {
  if (
    request.headers.get("content-type") === "application/x-www-form-urlencoded"
  ) {
    const payload = Object.fromEntries(await request.formData());
    const body =
      `<h2>Todo <u><i>${payload.title}</i></u> criada com sucesso</h2>`;
    return htmlResponse(body);
  }
}

export function newTodoAction() {
  const body = `
<a href="/">Home</a>
<form method="post" action="/todos/create">
  <input name="title" />
  <input type="hidden" name="completed" value="" />
  <input type="checkbox" name="completed" value="1" />
  <button type="submit">Enviar</button>
</form>
`;
  return htmlResponse(body);
}

export function routesAction() {
  return routes.toArray();
}

export function listTodosAction() {
  return listTodos();
}

export function listTodosCompletedAction() {
  return listTodosCompleted();
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
  id = id || url.searchParams.get("id");
  return toggleTodo(id);
}

export async function updateTodoAction(request, { id }) {
  const url = new URL(request.url);
  const { title } = await request.json();
  id = id || url.searchParams.get("id");
  return updateTodo(id, title);
}

export function removeTodoAction(request, { id }) {
  const url = new URL(request.url);
  id = id || url.searchParams.get("id");
  return removeTodo(id);
}
