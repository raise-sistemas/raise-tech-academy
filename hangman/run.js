import { pipe } from "./utils/pipe.js";
import { checkInput, getInput, updateState } from "./game/index.js";
import { mainView } from "./views/mainView.js"
import { endView } from "./views/endView.js"


export const run = (game, input) => {
  
  console.clear();
  
  console.log(mainView(game))
  
  const current = pipe(game)(
    (gameState) => getInput(gameState, input),
    checkInput,
    updateState,
  );

  if (current.status === "playing") return run(current, input);

  console.clear();
  
  console.log(endView(current));
  
  return current;
};
