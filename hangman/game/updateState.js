export const updateState = (gameState) => {
  // se acabaram as tentativas
  if (gameState.chances === 0) {
    gameState.status = "Defeat";
  }
  // se não falta nenhuma letra
  if (!gameState.correct.includes(" ")) {
    gameState.status = "Victory";
  }
  return gameState;
};
