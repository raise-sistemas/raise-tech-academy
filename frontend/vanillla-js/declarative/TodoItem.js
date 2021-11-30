export function TodoItem({ todo }) {
  return `
  <li>
    <button onClick="toggleTodo('${todo.id}')">
      ${todo.completed ? "⭕️" : "✅"}
    </button>
    ${todo.completed ? `<s>${todo.title}</s>` : todo.title} 
  </li>
  `;
}
