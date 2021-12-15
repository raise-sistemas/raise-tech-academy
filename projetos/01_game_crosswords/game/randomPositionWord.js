export function randomPositionWord(boardSize) {
    let positioWord = {
        posLine: Math.round(Math.random() * (boardSize))-1,
        posCol: Math.round(Math.random() * (boardSize))-1,
        orientation: Math.floor(Math.random() * (1 - 0 + 1) + 0),
    };
    return positioWord;
}