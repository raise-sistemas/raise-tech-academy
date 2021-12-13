import { validateEmail } from "../src/validateEmail.js";

export function cliMenu() {
  return console.log(validateEmail(prompt("Digite o E-mail:")));
}
