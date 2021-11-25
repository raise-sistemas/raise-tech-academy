import { BASE_URL } from '../env.js'

export async function getTodoMenus() {
  const id = prompt('Digite o ID da tarefa: ')
  const response = await fetch(`${BASE_URL}todos${id}`)

  try {
    console.table(await response.json())
  } catch {
    console.error('ID inválida, tente novamente!')
  }
}
