export function TodoItem({ todo }) {
  const icon = todo.completed ? "⭕️" : "✅";
  const title = todo.completed ? <s>{todo.title}</s> : todo.title;

  return (
    <li>
      <button onClick="toggleTodo('${todo.id}')">{icon}</button>
      {title}
    </li>
  );
}
