import { brightRed } from "https://deno.land/std@0.116.0/fmt/colors.ts"

export function wrongGuesses(wrongArr) {
  
  return `Letras erradas: ${brightRed(wrongArr.join(" "))}`;
}