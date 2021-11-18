export const search = (word, words) => {
  const results =  words.filter(element => {
    return element.includes(word)
  })
  return new Response(JSON.stringify({ results: results }), {
    headers: {
      "Content-Type": "application/json",
    }
  })
}