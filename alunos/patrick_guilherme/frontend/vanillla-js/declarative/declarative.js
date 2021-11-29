import { App } from './App.js'
import { todos } from './models.js'
import { deleteItem } from './deleteItem.js'
import './events.js'

export function render() {
  const app = document.getElementById('app')
  // View = F(state)
  const state = { todos }
  app.innerHTML = App(state)
}

render()

const delItem = document.querySelector('#deleteItem')

delItem.addEventListener('click', function () {
  delItem.parentElement.hidden = true
})
