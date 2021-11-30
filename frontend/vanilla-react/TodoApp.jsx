import { ListTodos } from "./ListTodos.jsx";
import { buildTodo } from "./models.js";

export function TodoApp({ todos, updateTodos }) {
  const activeTodos = todos.filter((todo) => !todo.completed);
  const qtyActiveTodos = activeTodos.length;
  const completedTodos = todos.filter((todo) => todo.completed);
  const qtyCompletedTodos = completedTodos.length;

  function onKeyPress(e) {
    if (e.key === "Enter") {
      const todo = buildTodo(e.target.value);
      todos.push(todo);
      e.target.value = "";
      updateTodos(Array.from(todos));
    }
  }

  return (
    <>
      <h1>Lista de Compras</h1>
      <h2>Produtos para Comprar ({qtyActiveTodos})</h2>
      <ListTodos todos={activeTodos}>
        <li>
          <input type="text" onKeyPress={onKeyPress} />
        </li>
      </ListTodos>
      <hr />
      <h2>Produtos Comprados ({qtyCompletedTodos})</h2>
      <ListTodos todos={completedTodos} />
    </>
  );
}
