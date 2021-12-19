import { matrizSettings } from "./board/modify/matriz.js";
import { showMessage } from "../utils/message.js";
import { displayBoard } from "./display/displayBoard.js";
import { showPlays } from "./display/showPlays.js";
import { validateInput } from "./validation/validateInput.js";
import { newPlay } from "./newPlay.js";
import foundWords from './board/foundWords.js';
import words from '../assets/words.js';
import board from '../assets/boards/board-json.js';

export let stop = false;
export function startGame() {
    
    let matriz = matrizSettings();
    displayBoard(matriz);
    showMessage('🟨 Você pode digitar 0 a qualquer momento para sair do jogo.');
    showMessage(`🟥 Palavras restantes (${words.length}): ${words.join(", ").toUpperCase()}.`);

    do {
        let input = prompt('Digite a coluna e linha do início e fim da palavra:');
        if (input === '0') return false; // encerrar o programa
        if (validateInput(input)) {
            matriz = newPlay(input, matriz);
        } else {
            displayBoard(matriz);
            showMessage('❌ Entrada inválida! Exemplos válidos: B3D3, E4E8, b3d3.');
            showPlays(foundWords);
        }
    } while (foundWords.length < words.length);

    if (foundWords.length === words.length) showMessage('%cParabéns, você venceu !!!%c', 'color: yellow');

    return true;
}