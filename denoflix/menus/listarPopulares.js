import { API_KEY, BASE_URL, LANG } from "../env.js";
import { initFetch } from "../utils/initFetch.js";

export async function listarPopulares() {
  const url = `${BASE_URL}movie/popular?api_key=${API_KEY}&language=${LANG}`;
  const json = await initFetch(url);
 
  const popular = json.results.map((populares) => {
    return {
        title: populares.title,
        original_title: populares.original_title,
        release_date: populares.release_date,
        adult: populares.adult
    }
  });

  const classAdultos = popular.filter(results => results.adult == true)
  const classLivre = popular.filter(results => results.adult == false)

  console.table(popular);
  console.table(classAdultos);
  console.table(classLivre);
}
