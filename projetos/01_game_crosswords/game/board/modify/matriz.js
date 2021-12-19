import { isFreePosition } from "../validation/validatePositions.js";
import { getNumberByLetter } from "../../../utils/letterForNumber.js";
import { randomPositionWord } from "../randomPositionWord.js";
import { getLetter } from "../../getLetter.js";
import { getWord } from "../../getWord.js";
import words from '../../../assets/words.js';
import { boardSize } from '../config/boardSize.js';
import { addPosition } from "./fullPositionsBoard.js";
import remainingWords from '../remainingWords.js';
import positionsWords from '../positionsWords.js';

export function boardSettings() {
    let matriz = new Array(boardSize.height);
    let pos = 0;
    for (let i = boardSize.height; i > 0; i--) {
        matriz[pos] = new Array(boardSize.width);
        pos++;
    }
    matriz = addFirstLineMatriz(matriz);
    matriz = fullMatriz(matriz);
    matriz = addWordMatriz(matriz);
    return matriz;
}

export function addFirstLineMatriz(matriz) {
    matriz[0][0] = '  ';
    for (let coluna = 1; coluna < boardSize.width; coluna++) {
        matriz[0][coluna] = (String.fromCharCode(97 + coluna-1)).toUpperCase();
    }
    return matriz;
}

export function fullMatriz(matriz) {
    for (let linha=1; linha < boardSize.height; linha++) {
        matriz[linha][0] = (linha < 10 ? '0' : '') + linha;
        for (let coluna = 1; coluna < boardSize.width; coluna++) {
            matriz[linha][coluna] = getLetter();
        }
    }
    return matriz;
}

export function addWordMatriz(matriz) {
    let count = 0;
    let amountWords = words.length;
    let attempts = [];
    while(amountWords > 0 && count < 1000) {
        
        let randomPosition = randomPositionWord();
        let posLine = randomPosition.posLine;
        let posCol = randomPosition.posCol;

        let objectWord = getWord(amountWords-1);
        if (!attempts.includes(`${posLine}${posCol}${randomPosition.orientation}${objectWord.word}`)) {
            if ((posLine > 0 && posCol > 0 && ((boardSize.width - (posCol-1) > objectWord.word.length) &&
                (boardSize.height - (posLine-1) > objectWord.word.length)) &&
                (isFreePosition(posLine, posCol, objectWord.word.length, randomPosition.orientation)))) {
                    let actualPosition = randomPosition.orientation == 0 ? posCol : posLine;
                    for (let letra in objectWord.word) {
                        if (randomPosition.orientation == 0) {
                            matriz[posLine][actualPosition] = objectWord.word[letra];
                            addPosition(posLine, actualPosition);
                        } else {
                            matriz[actualPosition][posCol] = objectWord.word[letra];
                            addPosition(actualPosition, posCol);
                        }
                        actualPosition++;
                    }
                    remainingWords.push(objectWord.word);
                    let orientationWord = randomPosition.orientation === 0 ? 'horizontal' : 'vertical';
                    positionsWords.push(`${objectWord.word} - Inicia na coluna ${(String.fromCharCode(97 + posCol-1)).toUpperCase()} e linha ${posLine}, na ${orientationWord}.`);
                    amountWords--;
            }
            attempts.push(`${posLine}${posCol}${randomPosition.orientation}${objectWord.word}`);
        }
        count++;
    }
    return matriz;
}