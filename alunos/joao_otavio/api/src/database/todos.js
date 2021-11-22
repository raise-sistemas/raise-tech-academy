const todos = JSON.parse(localStorage.getItem("todos") || "[]");

const findTodoById = (id) => {
  const index = todos.findIndex(todo => todo.id === id);
  return todos[index];
}

// POST /todo
export const create = (title) => {
  const createdAt = new Date();
  const updateAt = createdAt;

  const todo = {
    id: crypto.randomUUID(),
    title,
    completed: false, 
    createdAt, 
    updateAt
  }

  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
  return todo;
}

// GET: /todos
export const getTodos = () => JSON.stringify(todos);

// GET: /todo?id
export const getTodo = (id) => {
  const todo = findTodoById(id);
  
  if(!todo)
    return false;

  return structuredClone(todo);
}

// PATCH: /todo?id
export const update = (id, title) => {
  const todo = findTodoById(id);
  
  if(!todo)
    return false;

  todo.title = title;
  todo.updateAt = new Date();
  localStorage.setItem('todos', JSON.stringify(todos));
  return todo;
}

// PATCH: /todos/toggle?id
export const toggleCompleted = (id) => {
  const todo = findTodoById(id);
  
  if(!todo)
    return false;

  todo.completed = !todo.completed;
  todo.updateAt = new Date();
  localStorage.setItem('todos', JSON.stringify(todos));
  return true;
}

// DELETE: /todos?id
export const remove = (id) => {
  const index = todos.findIndex(todo => todo.id === id);
  
  if(index === -1)
    return false
  
  todos.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(todos));
  return true;
}
