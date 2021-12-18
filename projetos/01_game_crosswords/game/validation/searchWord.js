import { getNumberByLetter } from "../../utils/letterForNumber.js";

export function searchWord(entradaPosicoes, matriz) {
    let word = '';
    let movePosition = entradaPosicoes[1] == entradaPosicoes[3] ? getNumberByLetter(entradaPosicoes[0].toLowerCase()) : entradaPosicoes[1];
    let positionEnd = entradaPosicoes[1] == entradaPosicoes[3] ? getNumberByLetter(entradaPosicoes[2].toLowerCase()) : entradaPosicoes[3];
    do {
        word = entradaPosicoes[1] == entradaPosicoes[3] ? word + matriz[entradaPosicoes[1]][movePosition] : word + matriz[movePosition][getNumberByLetter(entradaPosicoes[0].toLowerCase())];
        movePosition++;
    } while (movePosition <= positionEnd);
    return word;
}