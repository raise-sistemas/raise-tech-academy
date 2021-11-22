//jogo da velha by Jorgin e Nicole
// import { bot } from "./bot.js";
// import { checkDraw } from "./checkDraw.js";
// import { checkWinner } from "./checkWinner.js";
// import { PLAYER1, PLAYER2} from "./constants.js";

const spaces = document.querySelectorAll(".space");
//let checkTurn = true;
let endgame = false;
const PLAYER1 = "X";
const PLAYER2 = "O";

const COMBINATIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

document.addEventListener("click", (event) => {
    if(event.target.matches(".space")){
        play(event.target.id, PLAYER1);
        setTimeout(() => bot(), 500);
    }
});

function bot(){
    const freeSpaces = [];
    for (let i in spaces) {
        if(!isNaN(i)){
            if(!spaces[i].classList.contains("X") && !spaces[i].classList.contains("O")){
                freeSpaces.push(i);
            }
        }   
    }
    // Utilizando math.floor para arrendondar para inteiro e math.random para numero aleatório gerando um numero inteiro aleatorio dentro das posições disponíveis
        
    const randomSpace = Math.floor(Math.random() * freeSpaces.length);

    
    play(freeSpaces[randomSpace], PLAYER2);
    
}

function play(id, turn) {
    const space = document.getElementById(id);
    //turn = checkTurn ? PLAYER1 : PLAYER2;
    space.textContent = turn;
    space.classList.add(turn);
    checkWinner(turn);
}

function checkWinner(turn) {
    const winner = COMBINATIONS.some((comb) => {
        return comb.every((index) => {
            return spaces[index].classList.contains(turn);
        })
    });
    
    if (winner) {
        gameOver(turn);
    } else if (checkDraw()) {
        gameOver();
    }
    //else {
    //     checkTurn = !checkTurn;
    // }
}

function checkDraw(){
    let x = 0;
    let o = 0;

    for(let i in spaces) {
        if(!isNaN(i)){
            if(spaces[i].classList.contains(PLAYER1)){
                x++;
            }
            
            if(spaces[i].classList.contains(PLAYER2)){
                o++;
            }
        }
    }

    return x + o === 9 ? true : false;
}

function gameOver(winner = null) {
    endgame = true;
    const gameOverBoard = document.getElementById("game-board");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    let message = null;

    for (var i=0;i<gameOverBoard.length;i+=1){
        gameOverBoard[i].style.display = 'block';
    }
    gameOverBoard.appendChild(h2);
    gameOverBoard.appendChild(h3);

    if(winner) {
        h2.innerHTML = `Parabéns <span>${winner}</span>, você é o rei da velha`;
    } else {
        h2.innerHTML = "Empatou";
    }

    let counter = 5;
    setInterval(() => {
        h3.innerHTML = `Reiniciando em ${counter--}`;
    }, 1000);

    setTimeout(() => location.reload(), 6000);
}