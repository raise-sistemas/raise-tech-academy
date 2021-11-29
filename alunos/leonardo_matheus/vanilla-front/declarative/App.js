import { ListTodos } from "./ListTodos.js";

export function App({ todos }) {
  const activeTodos = todos.filter((todo) => !todo.completed);
  const qtyActiveTodos = activeTodos.length;
  const completedTodos = todos.filter((todo) => todo.completed);
  const qtyCompletedTodos = completedTodos.length;

  return `
    <h1>Lista de Compras</h1>

    <h2>Produtos para Comprar (${qtyActiveTodos})</h2>
    <ol id="todo-list">
      ${ListTodos({ todos: activeTodos })}
    </ol>

    <input id="add-todo"
    type="text" onKeyPress="newTodoOnKeyPress(event)" 
    placeholder="Adicionar produto"/>

    <h2>Produtos Comprados (${qtyCompletedTodos})</h2>

    <ol id="completed-li">
      ${ListTodos({ todos: completedTodos })}
    </ol>
  `;
}
