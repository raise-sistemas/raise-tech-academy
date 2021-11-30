export let todos = [
  buildTodo('Pão Francês'),
  buildTodo('Leite Integral'),
  buildTodo('Margarina Qualy 500g', true)
]

globalThis.todos = todos

function buildTodo(title, completed = false) {
  return {
    id: crypto.randomUUID(),
    title,
    completed
  }
}

export function addTodo(title) {
  const todo = buildTodo(title)
  todos.push(todo)
}

export function deleteTodo(id) {
  const todo = todos.filter(todo => todo.id !== id)
  todos = todo
}

export function toggleTodo(id) {
  const todo = todos.find(todo => todo.id === id)
  todo.completed = !todo.completed
}

export function editTodo(id) {
  const todo = todos.find(todo => todo.id === id)
  
}