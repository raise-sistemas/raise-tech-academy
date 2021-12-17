import { readLastKey } from "../readLastKey.ts";
import { hideCursor } from "../hideCursor.ts";

const DIRECTIONS = {
  UP: { row: -1, col: 0, value: "↑" },
  DOWN: { row: 1, col: 0, value: "↓" },
  LEFT: { row: 0, col: -1, value: "←" },
  RIGHT: { row: 0, col: 1, value: "→" },
};

let direction = DIRECTIONS["RIGHT"];
const position = { ...DIRECTIONS["RIGHT"] }; // clone
const allowedKeys = ["UP", "DOWN", "LEFT", "RIGHT"];

function movePosition(position, direction) {
  const { row, col, value } = direction;
  position.row = Math.max(0, position.row + row);
  position.col = Math.max(0, position.col + col);
  position.value = value;
}

function drawAt({ row, col, value }) {
  // pula `row` linhas para baixo
  for (let y = 0; y < row; y++) {
    console.log();
  }
  // preenche as colunas com o dobro de espaço
  console.log(new Array(col * 2).fill(" ").join("") + value);
}

function gameLoop() {
  const key = readLastKey();
  if (allowedKeys.includes(key)) {
    direction = DIRECTIONS[key];
  }
  movePosition(position, direction);
  console.clear();
  drawAt(position);
}
Deno.setRaw(Deno.stdin.rid, false, { cbreak: true });
alert("CTRL+C para sair(CTRL+D para continuar)");
// esconde o caracter de posição do cursor para não atrapalhar o jogo,
// restaura quando fechar o jogo.
hideCursor();
// roda o loop do jogo a cada 0,1 segundos (10 fps).
setInterval(gameLoop, 100);
