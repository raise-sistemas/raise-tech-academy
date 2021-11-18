export const luckyWord = (words) => {
  const index = Math.round(Math.random() * words.length);
  return new Response(JSON.stringify({ lucky_word: words[index] }), {
    headers: {
      "Content-Type": "application/json",
    }
  })
}