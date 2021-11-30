export function todoItem({ todo }) {
    return `
    <li>
      <span class="cursor" onClick="toggleTodo('${todo.id}')">
        ${todo.completed ? "↩" : "✔"}
      </span>
      ${todo.completed ? `<s>${todo.title}</s>` : todo.title} <button onClick="deleteTodo('${todo.id}')">✖</button> 
    </li>
    `;
  }
  