// import { endgame } from "./constants.js";

// export function gameOver(winner = null) {
//     endgame = true;
//     const gameOverBoard = document.getElementById("game-board");
//     const h2 = document.createElement("h2");
//     const h3 = document.createElement("h3");
//     let message = null;

//     for (var i=0;i<gameOverBoard.length;i+=1){
//         gameOverBoard[i].style.display = 'block';
//     }
//     gameOverBoard.appendChild(h2);
//     gameOverBoard.appendChild(h3);

//     if(winner) {
//         h2.innerHTML = `Parabéns <span>${winner}</span>, você é o rei da velha`;
//     } else {
//         h2.innerHTML = "Empatou";
//     }

//     let counter = 5;
//     setInterval(() => {
//         h3.innerHTML = `Reiniciando em ${counter--}`;
//     }, 1000);

//     setTimeout(() => location.reload(), 6000);
// }