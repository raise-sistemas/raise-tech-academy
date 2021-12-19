import { boardSize } from './config/boardSize.js';

export function randomPositionWord() {
    let positioWord = {
        posLine: Math.floor((Math.random() * (boardSize.height-1)) + 1),
        posCol: Math.floor((Math.random() * (boardSize.width-1)) + 1),
        orientation: Math.floor(Math.random() * (1 - 0 + 1) + 0)
    };
    return positioWord;
}