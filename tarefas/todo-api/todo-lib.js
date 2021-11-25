// TAREFA: Armazenar os todos no localStorage,
// para não perder a cada reboot do server.
const todos = [];

function findById(id) {
  return (todo) => todo.id === id;
}

function getTodoById(id) {
  return todos.find(findById(id));
}

// GET /todos
export function listTodos() {
  // essa função faz uma cópia do array e dos objetos dentro de cada posição do array
  return todos.slice().map((todo) => ({ ...todo }));
}

// GET /todos/:id
// GET /todo?id=:id
export function getTodo(id) {
  return getTodoById(id);
}

// POST /todos
export function addTodo(title) {
  const createdAt = new Date();
  const id = crypto.randomUUID();
  const todo = { id, title, completed: false, createdAt, updatedAt: createdAt };
  todos.push(todo);

  return todo;
}

// DELETE /todos/:id
// DELETE /todo?id=:id
export function removeTodo(id) {
  const index = todos.findIndex(findById(id));
  if (index >= 0) {
    todos.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

// PATCH /todos/:id
// PATCH /todo?id:id
export function updateTodo(id, title) {
  const todo = getTodoById(id);
  todo.title = title;
  todo.updatedAt = new Date();

  return todo;
}

// PATCH /todos/:id/toggle
// PATCH /todos/toggle?id:id
export function toggleTodo(id) {
  const todo = getTodoById(id);
  todo.completed = !todo.completed;
  todo.updatedAt = new Date();

  return todo;
}
