import { TodoItem } from "./TodoItem.js";

export function ListTodos({ todos }) {
  return todos.map((todo) => TodoItem({ todo })).join("\n");
}
