import {red, green, bold} from "https://deno.land/std@0.116.0/fmt/colors.ts"

export const endGame = (status, secretWord) => {
 
  if(status === "Defeat") {
    return `
  ${bold(red(status))}
    `
  }

  return `
  ${bold(green(status))}
  `
}