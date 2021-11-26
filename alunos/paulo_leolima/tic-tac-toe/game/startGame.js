import { BOARD, PLAYER1} from "./utils/basicElements.js";
import { playerOneScore, playerTwoScore } from "./score/setScore.js";
import { drawScreen } from "./draw/drawScreen.js";
import { gameInput } from "./gameInput.js";
import {iaPlayer} from "./iaPlayer.js";
import { yourTurn } from "./yourTurn.js";
import {roundActions} from "./roundActions.js";

export function startGame() {
  let currentPlayer = PLAYER1;
  let continuePlaying = true;
  let pos;

  let pcPlayer = +prompt("Digite 1 para jogar sozinho ou 2 para jogar com um amigo!");
  

  do {
    drawScreen(BOARD, playerOneScore, playerTwoScore);
    gameInput(BOARD, currentPlayer);

    continuePlaying, currentPlayer = roundActions(BOARD, currentPlayer);

    if(!continuePlaying){break}

    if(pcPlayer === 1){
      //IA PLAYING
      pos = iaPlayer(BOARD);
      yourTurn(BOARD, pos, currentPlayer);
  
      continuePlaying, currentPlayer = roundActions(BOARD, currentPlayer);
  
      if(!continuePlaying){break}

    }

  } while (true);
}
