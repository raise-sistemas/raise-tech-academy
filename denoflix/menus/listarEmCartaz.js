import { API_KEY, BASE_URL, LANG } from "../env.js";
import { listar } from "../menus/listar.js";
import { compareAverage } from "../utils/compareAverage.js"

const url = `${BASE_URL}movie/now_playing?api_key=${API_KEY}&language=${LANG}`;

export const listarEmCartaz = () =>  listar(url, (result) => {
  const parsedResult = result.map((entry) => {
    if(entry.release_date) {
      entry.release_date = entry.release_date.replace(/[-]+/g,'/')
    }
    return {
      title: entry.title,      
      original_language: entry.original_language,
      vote_average: entry.vote_average,
      release_date: entry.release_date
    }
  });
    
    return  {
      top_rated: parsedResult
        .filter(entry => 8 <= entry.vote_average)
        .sort(compareAverage),

      good: parsedResult
        .filter(entry => 6 <= entry.vote_average && entry.vote_average < 8)
        .sort(compareAverage),

      average: parsedResult
        .filter(entry => 4 <= entry.vote_average && entry.vote_average < 6)
        .sort(compareAverage),
      
      awlful: parsedResult
        .filter(entry => 0 < entry.vote_average && entry.vote_average< 4)
        .sort(compareAverage),
      
      no_votes: parsedResult
        .filter(entry => entry.vote_average === 0)
    }; 
}, 1, 2);

