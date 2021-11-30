import { TodoItem } from "./TodoItem.jsx";

export function ListTodos({ todos, children }) {
  const lis = todos.map((todo) => <TodoItem todo={todo} />).join("\n");
  return (
    <ol>
      {lis}
      {children}
    </ol>
  );
}
