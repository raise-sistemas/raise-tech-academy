export async function cliMenu(title, options) {
  console.log("\n" + title)
  console.table(options, ["0"]);

  const last = options.length - 1;
  const option = prompt(` 0 à ${last} ou ENTER para voltar:`);

  if (option === null) return null;

  if (Number.isNaN(+option)) return null;

  if(+option > last) {
    console.log("Opção inválida");
    console.log("Digite ENTER para retornar ao menu")
    alert();
    console.clear();
    return cliMenu(title, options);
  }

  const result = options[+option]["1"];

  if (typeof result === "function") {
    await result();
    alert();
    console.clear();
  }

  return result;
}