import {WINCASES} from "./winnerCheck.js";
import {EMPTY, PLAYER1, PLAYER2} from "./utils/basicElements.js";
const players = {
    x: 0,
    o: 0,
    empty:0,
    draw: 0 
}

export function isFutureDraw(board, currentPlayer){
    players.draw = 0;
    WINCASES.forEach((slot)=>{
        players.x = 0;
        players.o = 0;
        players.empty = 0;
        slot.forEach((index)=>{
            if(board[index] === PLAYER1){
                players.x++;
            }else if(board[index] === PLAYER2){
                players.o++;
            }else{
                players.empty++;
            }
        })
        if (players.x === 1 && players.o === 1){
            players.draw++;
        }
        if (players.draw === 7 && (players.x === 2 || players.o === 2)){
            if (players.x === 2 && currentPlayer === PLAYER2){
                console.log("Deu velha do if");
            }
            if (players.o === 2 && currentPlayer === PLAYER1){
                console.log("Deu velha do if bolinha");
            }
        }
    })
    if (players.draw === 8){
        console.log("Deu velha de fora");
    }
}



  