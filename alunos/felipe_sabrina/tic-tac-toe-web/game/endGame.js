import {O, X} from  "./general.js";
export function endGame(path, result){
    if (path === X){
        let finished = document.getElementById("finished");
        finished.innerHTML += "<p>O jogador X ganhou!</p>";
        finished.classList.remove("hidden");
        result = true;
    }else if(path === O){
        let finished = document.getElementById("finished");
        finished.innerHTML += "<p>O jogador O ganhou!</p>";
        finished.classList.remove("hidden");
        result = true;
    }
}