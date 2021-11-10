import { red } from "https://deno.land/std@0.114.0/fmt/colors.ts";
import { fmtHeader } from "./fmtHeader.js";

export function cliMenu(title, options) {
  console.log(fmtHeader(title));
  console.table(options, ["0"]);

  const ultimo = options.length - 1;
  const option = prompt(red(` (0 à ${ultimo} ou ENTER para voltar):`));

  if (option === null) return null;

  if (Number.isNaN(+option)) return null;

  const result = options[Math.min(+option, ultimo)]["1"];

  if (typeof result === "function") {
    result();
    console.clear();
  }

  return result;
}
