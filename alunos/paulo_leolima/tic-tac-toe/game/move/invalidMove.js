import { yourTurn } from "../move/yourTurn.js";

export function invalidMove(board, currentPlayer) {
    console.log("Jogada inválida!\n");
    yourTurn(currentPlayer, board);
    return false;
}
