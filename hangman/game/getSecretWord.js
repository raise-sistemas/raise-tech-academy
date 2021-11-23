export const getSecretWord = (words) => {
  const index = Math.round(Math.random() * (words.length - 1));
  return words[index].toUpperCase();
};
