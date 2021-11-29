import { addTodo, toggleTodo, deleteTodo, toggleEdition, renameTodo } from "./models.js";
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

globalThis.deleteTodo = function (id) {
  deleteTodo(id);
  render();
};

globalThis.toggleEdition = function (id) {
  toggleEdition(id);
  render();
};

globalThis.renameTodo = function (e) {
  if (e.key === "Enter") {
    renameTodo(e.target.id, e.target.value);
    render();
  }
};
