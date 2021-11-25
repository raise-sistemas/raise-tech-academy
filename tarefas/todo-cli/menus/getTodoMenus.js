import { BASE_URL } from '../env.js'

export async function getTodoMenus() {
  const id = prompt('Digite o ID da tarefa: ')
  const response = await fetch(`${BASE_URL}todo${id}`)

  try {
    console.table(await response.json())
  } catch {
    console.error('ID inválida, tente novamente!')
  }
}
