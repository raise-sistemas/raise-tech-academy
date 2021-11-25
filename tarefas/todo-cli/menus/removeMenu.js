import { deleteRequest } from "../utils/deleteRequest.js";
import { chooseTodo } from "../display/chooseTodo.js";
import { BASE_URL } from "../env.js";

async function remove(id) {
  const url = `${BASE_URL}todos/${id}/remove`;
  const req = await deleteRequest(url);
  return req;
}

async function getTodos() {
  const list = await fetch(`${BASE_URL}todos`);
  const todos = await list.json();
  return todos;
}

export async function removeMenu() {
  const todos = await getTodos();
  const todo = chooseTodo(todos);
  const updatedTodo = await remove(todo.id);

  console.table(updatedTodo);

  return updatedTodo;
}
