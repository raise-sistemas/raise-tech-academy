import { verificarContemPosition } from "../modify/fullPositionsBoard.js";

export function isFreePosition(posLinha, posColuna, tamanhoPalavra, modo) {
    let pos = modo == 0 ? posColuna : posLinha;
    while (pos <= tamanhoPalavra) {
        if (verificarContemPosition(posLinha, posColuna)) {
            return false;
        }
        if (modo == 0) {
            posColuna++;
        } else {
            posLinha++;
        }
        pos++;
    }
    return true;
}