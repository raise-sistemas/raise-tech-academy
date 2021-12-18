import { labels } from "./labels.ts";
import { readInput } from "./readInput.ts";

let lastKey: string | null = "";
let started = false;

async function startReadingKey() {
  if (started) return false;
  started = true;
  while (true) {
    const input = await readInput();
    if (input === null) return;
    lastKey = new TextDecoder().decode(input);
    lastKey = Reflect.get(labels, lastKey) || lastKey;
  }
}

export function readLastKey() {
  startReadingKey();
  const tmp = lastKey;
  lastKey = null;
  return tmp;
}
