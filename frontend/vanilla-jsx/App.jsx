import { ListTodos } from "./ListTodos.jsx";

export function App({ todos }) {
  const activeTodos = todos.filter((todo) => !todo.completed);
  const qtyActiveTodos = activeTodos.length;
  const completedTodos = todos.filter((todo) => todo.completed);
  const qtyCompletedTodos = completedTodos.length;

  return (
    <>
      <h1>Lista de Compras</h1>
      <h2>Produtos para Comprar ({qtyActiveTodos})</h2>
      <ListTodos todos={activeTodos}>
        <li>
          <input type="text" onKeyPress="newTodoOnKeyPress(event)" />
        </li>
      </ListTodos>
      <hr />
      <h2>Produtos Comprados ({qtyCompletedTodos})</h2>
      <ListTodos todos={completedTodos} />
    </>
  );
}
