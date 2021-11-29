export function TodoItem({ todo }) {
  const view = `
  <li>
    <button onClick="toggleTodo('${todo.id}')">
      ${todo.completed ? "⭕️" : "✅"}
    </button>

    <button class="list-item" onClick="toggleEdition('${todo.id}')">
    ${todo.completed ? `<s>${todo.title}</s>` : todo.title}
    </button>

    <button onClick="deleteTodo('${todo.id}')">
    ${"❌"}
    </button>
  `;

  if(todo.enable_edition) {
    return view + `
    <input class="edit-box" id="${todo.id}" type="text" value="${todo.title}" onKeyPress="renameTodo(event)"/>
    </li>`
  }
  return view + `</li>`
  
}
