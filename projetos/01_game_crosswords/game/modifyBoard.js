import { getNumberByLetter } from "../utils/letterForNumber.js";

export function modifyBoard(matriz, wordPositions) {
    let movePosition = wordPositions[1] == wordPositions[3] ? getNumberByLetter(wordPositions[0].toLowerCase()) : wordPositions[1];
    let positionEnd = wordPositions[1] == wordPositions[3] ? getNumberByLetter(wordPositions[2].toLowerCase()) : wordPositions[3];
    do {
        if (wordPositions[1] == wordPositions[3]) {
            matriz[wordPositions[1]][movePosition] = '#';
        } else {
            matriz[movePosition][getNumberByLetter(wordPositions[0].toLowerCase())] = '#';
        }
        movePosition++;
    } while (movePosition <= positionEnd);
    return matriz;
}