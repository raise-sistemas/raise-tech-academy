import { TodoItem } from "./TodoItem.jsx";

export function ListTodos({ todos, children }) {
  const lis = todos.map((todo) => <TodoItem todo={todo} />);
  return (
    <ol>
      {lis}
      {children}
    </ol>
  );
}
