import { imminentCarrotDown, imminentCarrotLeft, imminentCarrotRight, imminentCarrotUp } from "../imminent-carrot"

export function eating (game) {
  let grid = game.grid

  if (imminentCarrotDown(grid)) {}

  else if (imminentCarrotUp(grid)) {}

  else if(imminentCarrotLeft(grid)) {}

  else if (imminentCarrotRight(grid)) {}
}

