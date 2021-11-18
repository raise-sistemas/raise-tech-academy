export const display = (gameState, character, log) => {
  
  log(character[6 - gameState.chances])
  
  const displayCorrect = gameState.correct.join(" ")
  log(displayCorrect)

  let displayBar = ""
  for (let i = 0; i < gameState.secretWord.length; i++){
    displayBar += "▔ "
  }

  log(displayBar)
  if(gameState.wrong.length) {
    log("Letras erradas: " + gameState.wrong.join(" "))
  }
  

  return gameState
}