import { startGame } from "./game/start.js";
import { showMessage } from "./utils/message.js";

// falta:
// trabalhar com arquivo json para o tabuleiro
// destacar palavras no tabuleiro
// tratamento de entradas inválidas
// melhorar implementação das letras no tabuleiro
// modularizar e refatorar o código
// melhorar organização dos arquivos

do {
    if (!startGame()) {
        break;
    }
} while (prompt('Jogar novamente? (sim/nao)') == "sim");
showMessage("Jogo terminado!");
