import { patchRequest } from "../utils/patchRequest.js"
import { BASE_URL } from "../env.js"
import { chooseTodo } from "../display/chooseTodo.js"

async function update(id, answer) {  
  const url = `${BASE_URL}todos/${id}/update`;

  const req = await patchRequest(url, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({title:answer})
  });

  return req;
}

async function getTodos() {
  const list = await fetch(`${BASE_URL}todos`);
  const todos = await list.json();
  console.log(todos);
  return todos;
}

export async function updateTodo(){
  const todos = await getTodos();
  const todo = chooseTodo(todos);
  const answer = prompt("Digite a nova tarefa: ");
  const updated = await update(todo.id , answer);
  return updated;
}
