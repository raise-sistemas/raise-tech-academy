import fullPositions from '../fullPositions.js';

export function addPosition(posLine, currentPosition) {
    fullPositions.push(posLine + '-' + currentPosition);
    return true;
}

export function verificarContemPosition(posLine, posCol) {
    //console.log('posicoes ocupadas: ' + fullPositions);
    if (fullPositions.includes(posLine + '-' + posCol)) {
        return true;
    }
    return false;
}