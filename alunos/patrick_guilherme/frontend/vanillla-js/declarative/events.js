import { addTodo, toggleTodo } from './models.js'
import { render } from './declarative.js'
import { deleteTodo } from './models.js'

globalThis.newTodoOnKeyPress = function (e) {
  if (e.key === 'Enter') {
    addTodo(e.target.value)
    render()
  }
}

globalThis.toggleTodo = function (id) {
  toggleTodo(id)
  render()
}

globalThis.deleteTodo = function (id) {
  toggleTodo(id)
  render()
}
