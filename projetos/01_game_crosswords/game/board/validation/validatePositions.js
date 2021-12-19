import { isPositionOccupied } from "../modify/fullPositionsBoard.js";

export function isFreePosition(posLine, posCol, wordSize, orientation) {
    let pos = orientation == 0 ? posCol : posLine;
    while (pos < wordSize) {
        if (isPositionOccupied(posLine, posCol)) {
            return false;
        }
        if (orientation == 0) {
            posCol++;
        } else {
            posLine++;
        }
        pos++;
    }
    return true;
}