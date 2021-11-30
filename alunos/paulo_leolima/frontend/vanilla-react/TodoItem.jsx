export function TodoItem({ todo }) {
  const [editing, setEditing] = React.useState(false);
  const icon = todo.completed ? "❗️" : "✔️";
  const title = todo.completed ? <s>{todo.title}</s> : todo.title;

  return (
    <li>
      <button>{icon}</button>
      <span
        onClick={() => setEditing(true)}
        onKeyPress={(e) => console.log(e.key)}
        contentEditable={editing}
      >
        {title}
      </span>
    </li>
  );
}
