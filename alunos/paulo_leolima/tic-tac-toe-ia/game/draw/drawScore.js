import { buildScore } from "../score/buildScore.js";

export function drawScore(x, o) {
  return console.log(buildScore(x, o));
}
