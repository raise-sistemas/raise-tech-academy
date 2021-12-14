import { isDomainMxValid } from "./isDomainMxValid.js";

export async function cliMenu() {
  return console.log(await isDomainMxValid(prompt("Digite o Domínio:")));
}
