export const checkLetter = (letter) => {
    if (!letter.match(/[A-Z\u00C0-\u00FF-]+/i) || letter.includes(' ') || letter.length > 1) {
        return false;
    }
    return true;
}
