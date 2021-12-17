import { readInput } from "../readInput.ts";
import { labels } from "../labels.ts";

console.log("CTRL+C para sair");

while (true) {
  const input = await readInput();
  const text = new TextDecoder().decode(input);
  console.log(labels[text] || text);
}
