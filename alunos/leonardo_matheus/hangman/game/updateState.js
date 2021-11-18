export const updateState = (gameState) => {
  if(gameState.chances === 0){
    gameState.status = "Game Over"
  }
  if(!gameState.correct.includes(" ")) {
    gameState.status = "Victory"
  }
}