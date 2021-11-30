export const todos = [
  buildTodo("Pão Francês"),
  buildTodo("Leite Integral"),
  buildTodo("Margarina Qualy 500g", true),
];

export function buildTodo(title, completed = false) {
  return {
    id: crypto.randomUUID(),
    title,
    completed,
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
