import { useState } from "react";
import { todos } from "./models.js";
import { TodoApp } from "./TodoApp.jsx";

export function App() {
  const [state, setState] = useState(todos);
  return <TodoApp todos={state} updateTodos={setState} />;
}
