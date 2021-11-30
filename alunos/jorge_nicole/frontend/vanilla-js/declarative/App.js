import { listTodos } from "./listTodos.js";

export function App({ todos }) {
  const activeTodos = todos.filter((todo) => !todo.completed);
  const qtyActiveTodos = activeTodos.length;
  const completedTodos = todos.filter((todo) => todo.completed);
  const qtyCompletedTodos = completedTodos.length;

  return `
    <div class="header">
      <h1>Lista de Compras</h1>
      <div>
        <img src="./assets/images/imagem1.png">
      </div>
      <input class="form-input" placeholder="Para comprar..." type="text" onKeyPress="newTodoOnKeyPress(event)"/>
    </div>
    <div class="container">
      <div class="box-list">
        <h2>Produtos para Comprar</h2>
        <h4>Quantidade de Itens: ${qtyActiveTodos}</h4>
        <ol class="to-buy">
          ${listTodos({ todos: activeTodos })}
        </ol>
      </div>

      <div class="box-list">
        <h2>Produtos Comprados</h2>
        <h4> Quantidade de Itens: ${qtyCompletedTodos}</h4>
        <ol class="to-buy">
          ${listTodos({ todos: completedTodos })}
        </ol>
      
      </div>
    </div>
  `;
}
