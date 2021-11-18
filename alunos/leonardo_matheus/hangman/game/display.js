export const display = (gameState, character) => {
  
  console.log(character[6 - gameState.chances])
  
  const displayCorrect = gameState.correct.join(" ")
  console.log(displayCorrect)

  let displayBar = ""
  for (let i = 0; i < gameState.secretWord.length; i++){
    displayBar += "▔ "
  }

  console.log(displayBar)
  if(gameState.wrong.length) {
    console.log("Letras erradas: " + gameState.wrong.join(" "))
  }
  

  return gameState
}