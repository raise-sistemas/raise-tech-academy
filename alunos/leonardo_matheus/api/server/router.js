import { search } from "./routes/search.js"
import words from "./assets/words.js"
import { luckyWord } from "./routes/luckyWord.js"


export const router = (req) => {
  const url = new URL(req.url)
  switch(url.pathname) {
    case "/search":
      return search(url.searchParams.get("word"), words)
    case "/lucky":
      return luckyWord(words)
  }
}