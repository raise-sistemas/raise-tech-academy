import { patchRequest } from "../utils/patchRequest.js";
import { BASE_URL } from "../env.js";
import { chooseTodo } from "../display/chooseTodo.js";

async function update(id, title) {
  const url = `${BASE_URL}todos/${id}/update`;
  const payload = { title };
  const req = await patchRequest(url, payload);

  return req;
}

async function getTodos() {
  const list = await fetch(`${BASE_URL}todos`);
  const todos = await list.json();
  console.log(todos);
  return todos;
}

export async function updateTodo() {
  const todos = await getTodos();
  const todo = chooseTodo(todos);
  const answer = prompt("Digite a nova tarefa: ");
  const updated = await update(todo.id, answer);
  return updated;
}
