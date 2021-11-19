export const endGame = (gameState, log) => {
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