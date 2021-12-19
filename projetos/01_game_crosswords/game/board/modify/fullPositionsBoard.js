import fullPositions from '../fullPositions.js';

export function addPosition(posLine, currentPosition) {
    fullPositions.push(`${posLine}-${currentPosition}`);
    return true;
}

export function isPositionOccupied(posLine, posCol) {
    if (fullPositions.includes(`${posLine}-${posCol}`)) {
        return true;
    }
    return false;
}