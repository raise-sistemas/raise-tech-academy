import {play} from "./play.js";

function createBoard(){
    let container = document.createElement('section')
    container.setAttribute("id", "tic-tac-toe");
    
    document.body.appendChild(container);
    
    for(let i=0; i<9 ; i++){
        let square = document.createElement('div');
        square.classList.add("square");
        square.setAttribute("id", i);
        square.addEventListener('click', play);
        document.getElementById("tic-tac-toe").appendChild(square); 
    };   
};
createBoard();