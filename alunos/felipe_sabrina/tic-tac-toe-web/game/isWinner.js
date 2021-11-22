import {wins} from  "./general.js";
import  {endGame} from "./endGame.js";
export function isWinner(path , result){
    wins.forEach((chance) => {
        if(document.getElementById(`${chance[0]}`).innerHTML === path &&
        document.getElementById(`${chance[1]}`).innerHTML === path &&
        document.getElementById(`${chance[2]}`).innerHTML === path ){
           endGame(path, result);
        }
    })
}