import { isFreePosition } from "./validatePositions.js";
import { randomPositionWord } from "./randomPositionWord.js";
import { getLetter, getWord, removeWord } from "./word.js";
import words from '../assets/words.js';
import { boardSize } from './customBoard/boardSize.js';
import { addPosition } from "./fullPositionsBoard.js";
import board from '../board-static/board-json.js';

export function matrizSettings() {
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
    while(amountWords > 0 && count < 1000) {
        
        let randomPosition = randomPositionWord(boardSize);
        let posLine = randomPosition.posLine;
        let posCol = randomPosition.posCol;

        let palavra = getWord(amountWords-1);
        if ((posLine > 0 && posCol > 0 && ((boardSize - (posCol-1) > palavra.word.length) &&
            (boardSize - (posLine-1) > palavra.word.length)) &&
            (isFreePosition(posLine, posCol, palavra.word.length, randomPosition.orientation)))) {
                let posicaoAtual = randomPosition.orientation == 0 ? posCol : posLine;
                for (const letra in palavra.word) {
                    if (randomPosition.orientation == 0) {
                        matriz[posLine][posicaoAtual] = palavra.word[letra];
                        addPosition(posLine, posicaoAtual);
                    } else {
                        matriz[posicaoAtual][posCol] = palavra.word[letra];
                        addPosition(posicaoAtual, posCol);
                    }
                    posicaoAtual++;
                }
                amountWords--;
        }
        count++;
    }
    return matriz;
}

export function staticMatrizSettings() {
    let matriz = new Array(board.width);
    let pos = 0;
    for (let i = board.height; i > 0; i--) {
        matriz[pos] = new Array(board.width);
        pos++;
    }
    matriz = addFirstLineMatriz(matriz, board.width);
    matriz = fullStaticMatriz(matriz);
    matriz = addWordMatriz(matriz, boardSize);
    return matriz;
}

export function fullStaticMatriz(matriz) {
    for (let linha=1; linha < board.height; linha++) {
        matriz[linha][0] = (linha < 10 ? '0' : '') + linha;
        for (let coluna = 1; coluna < board.width; coluna++) {
            matriz[linha][coluna] = getLetter();
        }
    }
    return matriz;
}