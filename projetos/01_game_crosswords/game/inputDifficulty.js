import boardEasy from '../assets/boards/board-easy.js';
import boardNormal from '../assets/boards/board-normal.js';
import boardHard from '../assets/boards/board-hard.js';
import { showMessage } from "../utils/message.js";

export function inputDifficulty(invalidInput) {
    console.clear();
    showMessage("Bem-vindo ao jogo Caça-Palavras!");
    if (invalidInput) {
        showMessage('❌ Entrada inválida, tente novamente.');
    }
    let difficulty = prompt(`Escolha a dificuldade:\n1 - Fácil (${boardEasy.width-1}x${boardEasy.height-1})\n2 - Normal (${boardNormal.width-1}x${boardNormal.height-1})\n3 - Difícil (${boardHard.width-1}x${boardHard.height-1})\nDigite aqui:`);
    if (difficulty != null) {
        if (difficulty === '1' || difficulty === '2' || difficulty === '3') {
            return difficulty;
        }
    }
    inputDifficulty(true);
}