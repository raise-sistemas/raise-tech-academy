export const  getSecretWord = (words) => {
  const index = Math.round(Math.random() * words.length);
  return words[index].toUpperCase();
}
