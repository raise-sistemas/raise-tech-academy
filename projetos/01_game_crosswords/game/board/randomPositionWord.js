export function randomPositionWord(boardSize) {
    let positioWord = {
        posLine: Math.floor((Math.random() * (boardSize-1)) + 1),
        posCol: Math.floor((Math.random() * (boardSize-1)) + 1),
        orientation: Math.floor(Math.random() * (1 - 0 + 1) + 0)
    };
    return positioWord;
}