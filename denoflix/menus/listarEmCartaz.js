import { API_KEY, BASE_URL, LANG } from "../env.js";
import { listar } from "../menus/listar.js";
import { rank } from "../utils/rank.js"
import { formatDate } from "../utils/formatDate.js"


export const listarEmCartaz = () => {
  const url = `${BASE_URL}movie/now_playing?api_key=${API_KEY}&language=${LANG}`;
  console.table([
    "20 resultados",
    "40 resultados",
    "60 resultados",
    "80 resultados",
    "100 resultados"
  ])
  
  let end;
  do {
    end = 1 + +prompt("Diga o índice do número de resultados a serem buscados:\n")
  } while(end < 1 || end > 5 || Number.isNaN(end))
  
  const pages = listar(url, 1, end)

  return pages((result) => rank(result.map(entry => {
    return {
      title: entry.title,      
      original_language: entry.original_language,
      vote_average: entry.vote_average,
      release_date: formatDate(entry.release_date)
    }
  })))
}
