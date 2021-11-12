import { API_KEY, BASE_URL, LANG } from "../env.js";
import { initFetch } from "../utils/initFetch.js";

export async function listarEmBreve() {
  const url = `${BASE_URL}movie/upcoming?api_key=${API_KEY}&language=${LANG}`;

  const json = await initFetch(url);
  const upcoming = json.results.map((emBreve) => {
    return {
        title: emBreve.title,
        release_date: emBreve.release_date,
        popularity: emBreve.popularity,
        adult: emBreve.adult
    }
  });

  const adultos = upcoming.filter(movie => movie.adult == true)
  const infantis = upcoming.filter(movie => movie.adult == false)

  console.table(upcoming);
  console.table(adultos);
  console.table(infantis);
}

