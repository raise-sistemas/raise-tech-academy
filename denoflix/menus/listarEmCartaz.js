import { API_KEY, BASE_URL, LANG } from "../env.js";
import { listar } from "../menus/listar.js";

const url = `${BASE_URL}movie/now_playing?api_key=${API_KEY}&language=${LANG}`;

export const listarEmCartaz = () =>  listar(url, (result) => {
  const filteredResults = [[],[]];  // Matriz a ser retornada, pois serão geradas duas tabelas.

  result.forEach((element) => {
    const obj = {
      title: element.title,      
      original_language: element.original_language,
      isadult: element.adult,
      average: element.vote_average,
    }

    if(element.adult) { // filtra os filmes adultos e não adultos para serem imprimidos em tabelas diferentes.
      filteredResults[1].push(obj);
    } else {
      filteredResults[0].push(obj);
    }
  });
    
    return filteredResults;
}, 1, 2);
