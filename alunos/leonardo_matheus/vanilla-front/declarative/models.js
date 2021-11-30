export const todos = [
  buildTodo("Pão Francês"),
  buildTodo("Leite Integral"),
  buildTodo("Margarina Qualy 500g", true),
];

globalThis.todos = todos;

function buildTodo(title, completed = false, enable_edition = false) {
  return {
    id: crypto.randomUUID(),
    title,
    completed,
    enable_edition
  };
}

export function addTodo(title) {
  const todo = buildTodo(title);
  todos.push(todo);
}

export function toggleTodo(id) {
  const todo = todos.find((todo) => todo.id === id);
  todo.completed = !todo.completed;
}

export function deleteTodo(id){
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if(todoIndex >= 0) todos.splice(todoIndex, 1);
}

export function renameTodo(id, newTitle){
  const todo = todos.find((todo) => todo.id === id);
  
  if(newTitle) todo.title = newTitle;
  todo.enable_edition = !todo.enable_edition;
}

export function toggleEdition(id){
  const todo = todos.find((todo) => todo.id === id);
  todo.enable_edition = !todo.enable_edition;
}