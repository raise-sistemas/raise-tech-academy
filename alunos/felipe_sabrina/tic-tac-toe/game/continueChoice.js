import {restart} from "./restart.js";
import {score} from "./score.js";

export function continueChoice(board){
    const resp = prompt("Deseja continuar?(s/n)");
    if(resp === 's' || resp === 'S'){
        restart(board);
        console.clear();
        console.table(board);
        return true;
    }
    if(resp === 'n' || resp === 'N'){
        score();
        return false;
    }
    return false;
}