export const checkLetter = (letter) => {
    if (letter != null) {
        if (letter != "0") {
            if (!letter.match(/[A-Z\u00C0-\u00FF-]+/i) || letter.includes(' ') || letter.length > 1) {
                return "Letra inválida, tente novamente!";
            } else {
                return "1";
            }
        } else {
            return "0";
        }
    } else {
        return "Letra inválida, tente novamente!";
    }
}
