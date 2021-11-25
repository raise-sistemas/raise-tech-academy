export async function getTodoMenus() {
  const id = prompt('Digite o ID da tarefa: ')
  const response = await fetch(`http://localhost:8000/todos/${id}`)

  try {
    console.log(await response.json())
  } catch {
    console.error('ID inválida, tente novamente!')
  }
}
