import words from "../assets/words.js"
export const  getSecretWord = async () => {
  const index = Math.round(Math.random() * words.length);
  return words[index].toUpperCase();
}
