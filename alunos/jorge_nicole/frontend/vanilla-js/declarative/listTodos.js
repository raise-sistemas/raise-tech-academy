import { todoItem } from "./todoItem.js";

export function listTodos({ todos }) {
  return todos.map((todo) => todoItem({ todo })).join("\n");
}
