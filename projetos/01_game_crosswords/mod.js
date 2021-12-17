import { startGame } from "./game/start.js";
import { showMessage } from "./utils/message.js";

do {
    if (!startGame()) {
        break;
    }
} while (prompt('Jogar novamente? (sim/nao)') == "sim");
showMessage("Jogo terminado!");
