export const updateStatus = (game) => {
  const clone = JSON.parse(JSON.stringify(game));

  // se acabaram as tentativas
  if (clone.chances === 0) {
    clone.status = "Defeat";
  }
  // se não falta nenhuma letra
  if (!clone.correct.includes(" ")) {
    clone.status = "Victory";
  }
  return clone;
};
