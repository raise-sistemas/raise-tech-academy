import { cliMenu } from "./cliMenu.js";
const tarefas = JSON.parse(localStorage.getItem("tarefas") || "[]");

function addMenu() {
  const nova_tarefa = prompt("O que deseja fazer?");
  if (nova_tarefa === null) return;
  tarefas.push(nova_tarefa);
}

function delMenu() {
  const index = prompt("Informe o índice da tarefa para excluir:");
  if (index === null) return;
  tarefas.splice(index, 1);
}

const menu = [
  ["Adicionar nova Tarefa", addMenu],
  ["Selecionar e Excluir Tarefa", delMenu],
];

do {
  console.table(tarefas);
} while (cliMenu("Escolha uma Ação", menu));

localStorage.setItem("tarefas", JSON.stringify(tarefas));

// let nova_tarefa;
// while (nova_tarefa = prompt("O que deseja fazer?")) {
//   tarefas.push(nova_tarefa);
//   console.table(tarefas);
// }
// let nova_tarefa;
// do {
//   console.table(tarefas);
//   nova_tarefa = prompt("O que deseja fazer?");
//   if (nova_tarefa) tarefas.push(nova_tarefa);
// } while (nova_tarefa);
