import { BASE_URL } from '../env.js'
export async function addTodoMenu() {
  const task = prompt('Digite a tarefa que deseja adicionar: ')
  try {
    const response = await fetch(`${BASE_URL}todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({ title: task })
    })

    console.log(await response.json())
  } catch {
    console.error('Ocorreu um erro, tente mais tarde!')
  }
}
