const completedOlEl = document.querySelector('#completedTodos');
const todos = [buildTodo("Pão Francês"), buildTodo("Manteiga")];
let countBtnId = 1;

function updateCounter() {
  // 'Todos' não completados
  document.getElementById("todoCounter").innerText = todos.filter(
    (todo) => !todo.completed
  ).length;
  
  // 'Todos' completados
  document.getElementById("todoCounter-completed").innerText = todos.filter(
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

  newTodo.innerHTML = `<button id="btn-todo-${countBtnId}">✅</button> ${title}`;
  document
    .getElementById("todos")
    .insertBefore(newTodo, document.getElementById("lastItem"));
  
  // adiciona evento de 'click' no botão da 'todo'
  document
    .querySelector(`#btn-todo-${countBtnId}`)
    .addEventListener('click', event => removeTodo(event.target.parentElement));

  countBtnId++;  
}

function appendCompletedTodos(title) {
  const newCompletedTodo = document.createElement('li');
  newCompletedTodo.innerHTML = `<button id="btn-todo-${countBtnId}">⭕️</button> <s>${title}</s>`;
  completedOlEl.appendChild(newCompletedTodo);
}

function addTodo(title) {
  const todo = buildTodo(title);
  todos.push(todo);
  appendTodo(todo.title);
  updateCounter();
}

function removeTodo(element){
  const title = element.innerText.split('✅ ')[1]; //pega título
  const todo = todos.filter(todo => todo.title === title)[0]; //retorna objeto
  
  todo.completed = true;
  appendCompletedTodos(title);
  element.remove(); //remove todo da lista de 'Produtos para comprar'
  updateCounter();
}

function initEvents() {
  const addInput = document.getElementById("addInput");

  addInput.addEventListener("keypress", (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      
      if(!e.target.value){
        alert('Campo Vazio!');
        return;
      }

      addTodo(e.target.value);
      e.target.value = "";
    }
  });
}

function main() {
  initEvents();  
  todos.forEach((todo) => appendTodo(todo.title));
  updateCounter();
}

main();
