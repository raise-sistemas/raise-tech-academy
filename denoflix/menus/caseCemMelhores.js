import { LANG, BASE_URL, API_KEY } from "../env.js";
import { initFetch } from "../utils/initFetch.js";

export async function caseCemMelhores(result){
    for (let j = 1; j < 7; j++) {
        const url = `${BASE_URL}movie/top_rated?api_key=${API_KEY}&language=${LANG}&page=${j}`;
        const json = await initFetch(url);
        const topRateds = json.results.map((result) => {
          return {
            title: result.title,
            votes: result.vote_average,
            release: result.release_date,
            adult: result.adult==true?"Sim":"Não"
          };
        });
        result.push(...topRateds);
      }      
      console.log("----- Os 100 Melhores Avaliados -----");
      console.table(result.slice(0, 100));

}