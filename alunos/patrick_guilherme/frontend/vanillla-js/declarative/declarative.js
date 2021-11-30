import { App } from './App.js'
import { todos, deleteTodo } from './models.js'

import './events.js'

export function render() {
  const app = document.getElementById('app')
  // View = F(state)
  const state = { todos }
  app.innerHTML = App(state)
}

render()
