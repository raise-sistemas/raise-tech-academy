export const checkLetter = (letter) => {
    if(!letter.match(/[A-Z\u00C0-\u00FF-]+/i)) 
        return false;
    
    if(letter.includes(' ')) 
        return false;
    
    if(letter.length > 1) 
        return false;

    return true;
}
