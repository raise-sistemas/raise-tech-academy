export function chooseTodo(todos){
  console.table(todos);
  const index = +prompt('Digite a tarefa que deseja alterar:');

  if(index > todos.length) {
    console.log("Opção inválida");
    console.log("Digite ENTER para retornar:")
    alert();
    console.clear();

    return chooseTodo()
  }
  
  return todos[index];
}