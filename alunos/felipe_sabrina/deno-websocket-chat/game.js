
const O = '<img src="./images/o.png">'
const X = '<img src=" ./images/x.png">'
let plays = 0;
let result = false;

const wins = [
    //upWin
    [0, 3, 6],
    [1 , 4, 7],
    [2, 5, 8],
    //downWin
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //diagonalWin
    [0, 4, 8],
    [2, 4, 6]
];



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

function play(){
    if (plays % 2 === 0 && this.innerHTML === "" && result === false){
        this.innerHTML = X;
        plays++;
        isWinner(X);
        return 0;
    }
    if(plays % 2 !== 0 && this.innerHTML === "" && result === false){
        this.innerHTML = O;
        plays++;
        isWinner(O);
        return 0;
    }
}

function isWinner(path){
    wins.forEach((chance) => {
        if(document.getElementById(`${chance[0]}`).innerHTML === path &&
        document.getElementById(`${chance[1]}`).innerHTML === path &&
        document.getElementById(`${chance[2]}`).innerHTML === path ){
           endGame(path);
        }
    })
}

function endGame(path){
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

function restart(){
    window.location.reload();
}

// export default function teste(){
//     console.log("DEU CERTOOO");
// }

createBoard();