import { boardSize } from "./customBoard/boardSize.js";
import { getNumberByLetter } from "../utils/letterForNumber.js";

export function validateInput(input) {
    if (input != null) {
        if (input.length === 4 || input.length === 5) {
            let firstLetter = input.charAt(0);
            if (firstLetter.length === 1 && firstLetter.match(/[a-z]/i)) {
                try {
                    let wordPositions = input.match(/[a-z]+|[^a-z]+/gi);
                    if (wordPositions[1] < boardSize && wordPositions[3] < boardSize &&
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