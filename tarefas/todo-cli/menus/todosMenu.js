import { BASE_URL } from '../env.js';
import { dateFormat } from '../utils/dateFormat.js';

export async function todosMenu(){
  const search = await fetch(`${BASE_URL}todos`);
  const response = await search.json();

  response.forEach(todo => {
    todo.createdAt = dateFormat(new Date(todo.createdAt));
    todo.updatedAt = dateFormat(new Date(todo.updatedAt));
  })

  console.table(response);
}
