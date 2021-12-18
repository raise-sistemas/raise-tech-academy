import { boardSize } from "./customBoard/boardSize.js";
import { getNumberByLetter } from "../utils/letterForNumber.js";

export function validateInput(input) {
    if (input != null) {
        if (input.length >= 4 && input.length <= 5) {
            if (input.charAt(0).match(/[a-z]/i)) {
                try {
                    let wordPositions = input.match(/[a-z]+|[^a-z]+/gi);
                    if (wordPositions[1] < boardSize && wordPositions[3] < boardSize &&
                        wordPositions[1] > 0 && wordPositions[3] > 0 &&
                        getNumberByLetter(wordPositions[0].toLowerCase()) > 0 &&
                        getNumberByLetter(wordPositions[2].toLowerCase()) > 0 &&
                        getNumberByLetter(wordPositions[0].toLowerCase()) < boardSize &&
                        getNumberByLetter(wordPositions[2].toLowerCase()) < boardSize) {
                        return true;
                    }
                } catch (error) {
                    return false;
                }
            }
        }
    }
    return false;
}