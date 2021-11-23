export function display(gameState, character, log) {
  log(character[6 - gameState.chances]);

  const displayCorrect = gameState.correct.join(" ");
  log(displayCorrect);

  const displayBar = new Array(gameState.secretWord.length).fill("▔ ").join("");
  log(displayBar);

  if (gameState.wrong.length) {
    log("Letras erradas: " + gameState.wrong.join(" "));
  }

  //tips
  if (gameState.chances < 3) {
    log();
    log("Dicas:");
    log(`Classe gramatical: ${gameState.tips.class}`);
  }

  if (gameState.chances < 2) {
    const count = Math.min(5, gameState.tips.synonyms.length);
    const synonymsArr = gameState.tips.synonyms.slice(0, count);
    const synonyms = synonymsArr.join(" \| ");

    log(`Sinônimos: ${synonyms}`);
  }

  return gameState;
}
