export const display = async (gameState, character, log) => {
  
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
  
  //tips
  if(gameState.chances < 3){
    log()
    log("Dicas:")
    log(`Classe gramatical: ${gameState.tips.class}`)   
  }
  
  if(gameState.chances < 2){
    const count = 
      gameState.tips.synonyms.length > 5 ?  
        5 : 
        gameState.tips.synonyms.length
    const synonymsArr = gameState.tips.synonyms.slice(0, count)
    const synonyms = synonymsArr.join(" \| ")
    log(`Sinônimos: ${synonyms}`)
  }
  
  // End Game
  if(gameState.status !== "playing"){
    log()
    if(gameState.status === "Game Over") {
      log("%c" + gameState.status, "color: red;")
      log()
      log(`A palavra secreta era: ${gameState.secretWord}`)
    }
    if(gameState.status === "Victory") {
      log("%c" + gameState.status, "color: green;")
    }
  }

  return gameState
}