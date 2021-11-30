import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App.jsx";

globalThis.React = React;

const root = document.getElementById("root");
ReactDOM.render(React.createElement(App), root);
