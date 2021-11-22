// import { play } from "./mod.js";
// import { spaces } from "./constants.js";
// import { PLAYER2 } from "./constants.js";

// export function bot(){
//     const freeSpaces = [];
//     for (let i in spaces) {
//         if(!isNaN(i)){
//             if(!spaces[i].classList.contains("X") && !spaces[i].classList.contains("O")){
//                 freeSpaces.push(i);
//             }
//         }   
//     }
//     // Utilizando math.floor para arrendondar para inteiro e math.random para numero aleatório gerando um numero inteiro aleatorio dentro das posições disponíveis
        
//     const randomSpace = Math.floor(Math.random() * freeSpaces.length);

    
//     play(freeSpaces[randomSpace], PLAYER2);
    
// }