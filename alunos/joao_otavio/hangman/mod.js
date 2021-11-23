import { startGame, stop } from "./game/start.js";
import { showMessage } from "./game/message.js";

// Últimas modificações:
// Novas refatorações no código.
// Resolvido: ao dar apenas enter no input de jogar novamente, o programa dava erro.

do {
    if (!startGame()) {
        break;
    }
} while (prompt('Jogar novamente? (sim/nao)') == "sim");
showMessage("Jogo terminado!");
