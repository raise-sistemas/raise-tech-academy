function readInputChar(prompt) {
  let char;
  do {
    char = (prompt("Digite a Próxima Letra:") || "").toUpperCase().charAt(
      0,
    );
  } while (!char.test(/[A-Z\u00C0-\u00FF-]/));

  return char;
}

export function getInput(gameState, getEntry) {
  let input;
  do {
    input = getEntry("Digite a Próxima Letra:");
    if (input) input = input.toUpperCase();
  } while (
    !input ||
    !(/[A-Z\u00C0-\u00FF-]+/i).test(input) ||
    gameState.correct.includes(input) ||
    gameState.wrong.includes(input)
  );
  // Esse tuple só existe pra satisfazer o pipe, remover essa dependência
  return [input.charAt(0), gameState];
}
