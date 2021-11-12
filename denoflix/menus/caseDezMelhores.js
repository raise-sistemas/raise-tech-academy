import { LANG, BASE_URL, API_KEY } from "../env.js";
import { initFetch } from "../utils/initFetch.js";

export async function caseDezMelhores(result) {
  const url = `${BASE_URL}movie/top_rated?api_key=${API_KEY}&language=${LANG}`;
  const json = await initFetch(url);
  const topRateds = json.results.map((result) => {
    return {
      title: result.title,
      votes: result.vote_average,
      release: result.release_date,
      adult: result.adult==true?"Sim":"Não"
    };
  });

  console.log("----- Os 10 Melhores Avaliados -----");
  console.table(topRateds.slice(0, 10));
}
