import { addTodo, toggleTodo, deleteTodo } from "./models.js";
import { render } from "./declarative.js";

globalThis.newTodoOnKeyPress = function (e) {
  if (e.key === "Enter") {
    addTodo(e.target.value);
    render();
  }
};

globalThis.toggleTodo = function (id) {
  toggleTodo(id);
  render();
};
