// agrupar drawBoard e drawScore em uma função drawScreen()
export function drawBoard(board) {
  console.clear();
  console.log("---==< Jogo da Velha >==---");
  // separar a linha abaixo no drawBoard e as acima no drawScreen()
  console.table(board);
}
