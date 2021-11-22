export let playerOneValue = 0;
export let playerTwoValue = 0;

if (currentPlayer === PLAYER1) {
    //console.log("entrei");
    // Retirar essa mutação para um local mais claro
    playerOneValue++;
}
if (currentPlayer === PLAYER2) {
    // Retirar essa mutação para um local mais claro
    playerTwoValue++;
}