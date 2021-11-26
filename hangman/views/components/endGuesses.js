import { yellow, blue } from "https://deno.land/std@0.116.0/fmt/colors.ts"

export function endGuesses(correctArr, secretWord) {
  if(!correctArr.includes(" ")) {
    return blue(correctArr.join(" "));
  }
  
  const completed = correctArr.map((letter, index) => {
    if(letter === " ") {
      return yellow(secretWord.charAt(index));
    }
    return letter;
  });

  return completed.join(" ");
}
