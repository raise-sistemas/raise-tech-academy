// import {checkDraw} from "./checkDraw.js";
// import { COMBINATIONS } from "./constants.js";
// import { spaces } from "./constants.js";

// export function checkWinner(turn) {
//     const winner = COMBINATIONS.some((comb) => {
//         return comb.every((index) => {
//             return spaces[index].classList.contains(turn);
//         })
//     });
    
//     if (winner) {
//         gameOver(turn);
//     } else if (checkDraw()) {
//         gameOver();
//     }
//     //else {
//     //     checkTurn = !checkTurn;
//     // }
// }