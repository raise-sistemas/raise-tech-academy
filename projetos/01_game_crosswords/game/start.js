import { matrizSettings } from "./matriz.js";
import { showMessage } from "./message.js";
import board from '../board-static/board-json.js';

export function startGame() {

    showMessage('||-=-=-=-CAÇA-PALAVRAS-=-=-=-||\n');

    let staticBoard = true;
    
    let matriz = matrizSettings(staticBoard);
    
    showMessage((matriz.join("\n")).toString().replace(/,/g, ' '));
    
    //console.log(board.width);

}