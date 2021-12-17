export function validateInput(input) {
    if (input != null) {
        if (input.length === 4 || input.length === 5) {
            let firstLetter = input.charAt(0);
            return firstLetter.length === 1 && firstLetter.match(/[a-z]/i);
        }
    }
    return false;
}