import { patchRequest } from "../utils/patchRequest.js"
import { BASE_URL } from "../env.js"
import { chooseTodo } from "../display/chooseTodo.js"

async function toggle(id) {  
  const url = `${BASE_URL}todos/${id}/toggle`;

  const req = await patchRequest(url);

  return req;
}

async function getTodos() {
  const list = await fetch(`${BASE_URL}todos`);
  const todos = await list.json();
  return todos;
}


export async function toggleMenu() {
  const todos = await getTodos();
  const todo = chooseTodo(todos);
  const updatedTodo = await toggle(todo.id);
  
  console.table(updatedTodo);
  
  return updatedTodo;
}

/*
lista
escolhe
toggle
*/