import * as todos from '../database/todos.js';

const headers = {
  'Content-Type': 'application/json',
}

export const createTodo = (title) => {
  return new Response(JSON.stringify(todos.create(title)), {headers});
}

export const getTodos = () => {
  return new Response(todos.getTodos(), {headers});
}

export const getTodo = (id) => {
  return new Response(JSON.stringify(todos.getTodo(id)), {headers});
}

export const updateTodo = (id, title) => {
  return new Response(JSON.stringify(todos.update(id, title)), {headers});
}

export const deleteTodo = (id) => {
  return new Response(JSON.stringify(todos.remove(id)), {headers});
}

export const toggleCompleted = (id) => {
  return new Response(todos.toggleCompleted(id), {headers});
}
