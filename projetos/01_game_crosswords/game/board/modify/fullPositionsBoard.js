let fullPositions = [];

export function addPosition(posLine, currentPosition) {
    fullPositions.push(posLine + '-' + currentPosition);
    return true;
}

export function verificarContemPosition(posLine, posCol) {
    if (fullPositions.includes(posLine + '-' + posCol)) {
        return true;
    }
    return false;
}