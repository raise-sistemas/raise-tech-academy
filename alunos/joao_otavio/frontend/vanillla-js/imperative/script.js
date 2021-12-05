const todos = [buildTodo("Pão Francês"), buildTodo("Manteiga")];

function findTodo(title) {
  return todos.find(todo => todo.title === title);
}

function updateCounter() {
  // 'Todos' não completados
  document.querySelector("#todoCounter").innerText = todos.filter(
    (todo) => !todo.completed
  ).length;
  
  // 'Todos' completados
  document.querySelector("#todoCounter-completed").innerText = todos.filter(
    (todo) => todo.completed
  ).length;
}

function buildTodo(title) {
  return {
    id: crypto.randomUUID(),
    title,
    completed: false,
  };
}

function appendTodo(title) {
  const newTodo = document.createElement("li");

  newTodo.innerHTML = `<button>✅</button> <span>${title}</span>`;
  document
    .querySelector("#todos")
    .insertBefore(newTodo, document.querySelector("#lastItem"));
  
  // adiciona evento de 'click' no botão da 'todo'
  newTodo.querySelector('button')
    .addEventListener('click', event => removeTodo(event.target.parentElement));
  
  // adiciona evento de 'click' na 'todo' (span)
  newTodo.querySelector('span')
    .addEventListener('click', event => updateTodo(event.target));
}

function appendCompletedTodos(title) {
  const newCompletedTodo = document.createElement('li');
  newCompletedTodo.innerHTML = `<button>⭕️</button> <s>${title}</s>`;

  document.querySelector('#completedTodos')
    .appendChild(newCompletedTodo);

  // adiciona evento de 'click' no botão da 'todo'
  newCompletedTodo.querySelector('button')
  .addEventListener('click', event => toggleTodo(event.target.parentElement));
}

//Troca 'todo' de 'completada' para 'não completada'
function toggleTodo(element){
  const title = element.querySelector('s').innerText;
  const todo = findTodo(title);
  todo.completed = false;
  appendTodo(title);
  element.remove();
  updateCounter();
}

function addTodo(title) {
  const todo = buildTodo(title);
  todos.push(todo);
  appendTodo(todo.title);
  updateCounter();
}

function removeTodo(element){
  const title = element.querySelector('span').innerText; //pega título
  const todo = findTodo(title);

  todo.completed = true;
  appendCompletedTodos(title);
  element.remove(); //remove todo da lista de 'Produtos para comprar'
  updateCounter();
}

function updateTodo(element){
  const todo = findTodo(element.innerText);

  const inputEdit = document.createElement('input');
  inputEdit.value = element.innerText;
  element.innerHTML = '';
  element.appendChild(inputEdit);
  
  inputEdit.focus();

  // adiciona evento 'keypress' no input de edição
  inputEdit.addEventListener('keypress', event => {
    if (event.code === "Enter" || event.code === "NumpadEnter") {

      if(!event.target.value){
        alert('Campo Vazio!');
        return;
      }

      todo.title = event.target.value;
      element.innerHTML = todo.title;
    }
  });
}

function initEventInput() {
  const addInput = document.querySelector("#addInput");

  addInput.addEventListener("keypress", event => {
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      
      if(!event.target.value){
        alert('Campo Vazio!');
        return;
      }

      addTodo(event.target.value);
      event.target.value = "";
    }
  });
} 

function main() {
  initEventInput();  
  todos.forEach((todo) => appendTodo(todo.title));
  updateCounter();
}

main();
