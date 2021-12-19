import { isFreePosition } from "../validation/validatePositions.js";
import { randomPositionWord } from "../randomPositionWord.js";
import { getLetter } from "../../getLetter.js";
import { getWord } from "../../getWord.js";
import words from '../../../assets/words.js';
import { boardSize } from '../config/boardSize.js';
import { addPosition } from "./fullPositionsBoard.js";
import board from '../../../assets/boards/board-json.js';
import remainingWords from '../remainingWords.js';

export function boardSettings() {
    let matriz = new Array(boardSize);
    let pos = 0;
    for (let i = boardSize; i > 0; i--) {
        matriz[pos] = new Array(boardSize);
        pos++;
    }
    matriz = addFirstLineMatriz(matriz, boardSize);
    matriz = fullMatriz(matriz, boardSize);
    matriz = addWordMatriz(matriz, boardSize);
    return matriz;
}

export function addFirstLineMatriz(matriz, boardSize) {
    matriz[0][0] = '  ';
    for (let coluna = 1; coluna < boardSize; coluna++) {
        matriz[0][coluna] = (String.fromCharCode(97 + coluna-1)).toUpperCase();
    }
    return matriz;
}

export function fullMatriz(matriz, boardSize) {
    for (let linha=1; linha < boardSize; linha++) {
        matriz[linha][0] = (linha < 10 ? '0' : '') + linha;
        for (let coluna = 1; coluna < boardSize; coluna++) {
            matriz[linha][coluna] = getLetter();
        }
    }
    return matriz;
}

export function addWordMatriz(matriz, boardSize) {
    let count = 0;
    let amountWords = words.length;
    let attempts = [];
    while(amountWords > 0 && count < 1000) {
        
        let randomPosition = randomPositionWord(boardSize);
        let posLine = randomPosition.posLine;
        let posCol = randomPosition.posCol;

        let palavra = getWord(amountWords-1);
        if (!attempts.includes(`${posLine}${posCol}${randomPosition.orientation}${palavra.word}`)) {
            if ((posLine > 0 && posCol > 0 && ((boardSize - (posCol-1) > palavra.word.length) &&
                (boardSize - (posLine-1) > palavra.word.length)) &&
                (isFreePosition(posLine, posCol, palavra.word.length, randomPosition.orientation)))) {
                    let posicaoAtual = randomPosition.orientation == 0 ? posCol : posLine;
                    for (let letra in palavra.word) {
                        if (randomPosition.orientation == 0) {
                            matriz[posLine][posicaoAtual] = palavra.word[letra];
                            addPosition(posLine, posicaoAtual);
                        } else {
                            matriz[posicaoAtual][posCol] = palavra.word[letra];
                            addPosition(posicaoAtual, posCol);
                        }
                        posicaoAtual++;
                    }
                    remainingWords.push(palavra.word);
                    amountWords--;
            }
            attempts.push(`${posLine}${posCol}${randomPosition.orientation}${palavra.word}`);
        }
        count++;
    }
    return matriz;
}