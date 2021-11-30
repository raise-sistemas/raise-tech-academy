export function todoItem({ todo }) {
    return `
    <li>
      <span onClick="toggleTodo('${todo.id}')">
        ${todo.completed ? "↩" : "✔"}
      </span>
      ${todo.completed ? `<s>${todo.title}</s>` : todo.title} <button class="not-outline" onClick="deleteTodo('${todo.id}')">✖</button> 
    </li>
    `;
  }
  