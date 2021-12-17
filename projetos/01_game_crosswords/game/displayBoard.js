import { showMessage } from "../utils/message.js";

export function displayBoard(matriz) {
    console.clear();
    showMessage(' -----------------------------');
    showMessage('|=-=-=-=-CAÇA-PALAVRAS-=-=-=-=|');
    showMessage(' -----------------------------');
    showMessage(`${(matriz.join("\n")).toString().replace(/,/g, ' ')}\n`);
    return true;
}

