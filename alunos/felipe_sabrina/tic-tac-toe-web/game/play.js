import {O, X} from  "./general.js";
import {isWinner} from "./isWinner.js";
import {isBoardFull} from "./isBoardFull.js";
let plays = 0;
let result = false;
export function play(){
    if (plays % 2 === 0 && this.innerHTML === "" && result === false){
        this.innerHTML = X;
        plays++;
        isWinner(X, result);
        if(isBoardFull())console.log("Deu velha");
        return 0;
    }
    if(plays % 2 !== 0 && this.innerHTML === "" && result === false){
        this.innerHTML = O;
        plays++;
        isWinner(O, result);
        if(isBoardFull())console.log("Deu velha");
        return 0;
    }
}