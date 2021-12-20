import words from '../../assets/words.js';
import boardEasy from "../../assets/boards/board-easy.js";
import boardHard from "../../assets/boards/board-hard.js";
import boardNormal from "../../assets/boards/board-normal.js";
import { boardSize } from '../board/config/boardSize.js';

export function setBoardCharacteristics(difficulty) {
    let board;
    switch(difficulty) {
        case '1':
            board = boardEasy;
            break;
        case '3':
            board = boardHard;
            break;
        default:
            board = boardNormal;
            break;
    }
    boardSize.height = board.height;
    boardSize.width = board.width;
    if (words.length > 0) {
        words.splice(0,words.length);
    }
    board.words.forEach(element => {
        words.push(element);
    });
    return true;

}

