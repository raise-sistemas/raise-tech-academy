
import { updateState , getInput, updateStatus } from "./game/index.js";
import { mainView } from "./views/mainView.js"
import { endView } from "./views/endView.js"


export const run = (newRound, input) => {
  console.clear();

  console.log(mainView(newRound))

  const entry = getInput(prompt, newRound.correct, newRound.wrong);

  const updatedGame = updateState(entry, newRound);
  
  const endRound = updateStatus(updatedGame);

  if (endRound.status === "playing") return run(endRound, input);

  console.clear();
  
  console.log(endView(endRound));
  
  return endRound;
};
