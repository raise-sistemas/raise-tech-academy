export function TodoItem({ todo }) {
  return `
  <li>
    <button onClick="toggleTodo('${todo.id}')">
      ${todo.completed ? '⭕️' : '✅'}
    </button>
    ${todo.completed ? `<s>${todo.title}</s>` : todo.title}
    <button id="deleteItem" onClick="">
    ❌
    </button>
  </li>
  `
}
