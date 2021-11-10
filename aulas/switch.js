function selecionar(opcao) {
  if (opcao === "BACK" || opcao === "VOLTAR") return "voltando"

  switch(opcao) {
    case "BACK":
    case "VOLTAR":
      return "voltando"

    case "EXIT":
    case "SAIR":
      return "saindo"

    default: // else
      return "nenhuma"
  }
}

console.log( selecionar("voltar") )
