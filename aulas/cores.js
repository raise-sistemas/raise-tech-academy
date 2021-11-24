// https://deno.land/std@0.115.1/fmt
import { bold, red } from "https://deno.land/std@0.115.1/fmt/colors.ts";

console.log(
  "%cVermelho %cVerde",
  "color: red; font-weight: bold; background-color: rgb(33, 36, 43)",
  "color: green; font-style: italic; text-decoration: line-through",
);

console.log(bold(red("Vermelho Negrito")));
