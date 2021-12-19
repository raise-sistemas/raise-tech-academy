import { boardSettings } from "./board/modify/matriz.js";
import { showMessage } from "../utils/message.js";
import { displayBoard } from "./display/displayBoard.js";
import { showPlays } from "./display/showPlays.js";
import { validateInput } from "./validation/validateInput.js";
import { newPlay } from "./newPlay.js";
import { clearWords } from "./clearWords.js";
import foundWords from './board/foundWords.js';
import remainingWords from './board/remainingWords.js';
import staticBoard from '../assets/boards/board-json.js';

export let stop = false;
export function startGame() {
    
    let board = boardSettings();
    displayBoard(board);
    showMessage('🟨 Você pode digitar 0 a qualquer momento para sair do jogo.');
    showMessage(`🟥 Palavras restantes (${remainingWords.length}): ${remainingWords.join(", ").toUpperCase()}.`);

    do {
        let input = prompt('Digite a coluna e linha do início e fim da palavra:');
        if (input === '0') return false; // encerrar o programa
        if (validateInput(input)) {
            board = newPlay(input, board);
        } else {
            displayBoard(board);
            showMessage('❌ Entrada inválida! Exemplos válidos: B3D3, E4E8, b3d3.');
            showPlays(foundWords);
        }
    } while (remainingWords.length > 0);

    clearWords();
    if (remainingWords.length < 1) console.log('%cParabéns, você venceu!', 'color: lime');

    return true;
}