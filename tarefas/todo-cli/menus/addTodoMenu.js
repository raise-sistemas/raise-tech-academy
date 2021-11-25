export async function addTodoMenu() {
  await fetch('http://localhost:8000', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify(data)
  })
}
