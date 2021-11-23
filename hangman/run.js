import { pipe } from "./utils/pipe.js";
import { character } from "./assets/character.js";
import { checkInput, display, getInput, updateState } from "./game/index.js";

export const run = (game, log, input, clear) => {
  clear();

  const current = pipe(game)(
    (gameState) => display(gameState, character, log),
    (gameState) => getInput(gameState, input),
    checkInput,
    updateState,
  );

  if (current.status === "playing") return run(current, log, input, clear);

  clear();

  return display(current, character, log);
};
