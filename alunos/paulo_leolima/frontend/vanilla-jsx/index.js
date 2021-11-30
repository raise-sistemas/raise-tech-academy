import { App } from "./App.jsx";
import { todos } from "./models.js";
import "./react.js";

function render() {
  const root = document.getElementById("root");
  root.innerHTML = App({ todos });
}

render();
