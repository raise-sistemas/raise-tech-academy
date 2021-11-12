import { API_KEY, BASE_URL, LANG } from "../env.js";
import { initFetch } from "../utils/initFetch.js";

export async function listUpcoming() {
  const url = `${BASE_URL}movie/upcoming?api_key=${API_KEY}&language=${LANG}`;

  const json = await initFetch(url);
  const upcoming = json.results.map((movie) => {
    return {
        title: movie.title,
        release_date: movie.release_date,
        popularity: movie.popularity,
        adult: movie.adult
    }
  });

  let adultsOnly = upcoming.filter(movie => movie.adult);

  if (adultsOnly.length == 0) {
    adultsOnly = 'Não há filmes adultos'; 
  }

  let generalAudience = upcoming.filter(movie => !movie.adult);

  if (generalAudience.length == 0) {
    generalAudience = 'Não há filmes de classificação livre';
  }

  console.table(upcoming);
  console.table(adultsOnly);
  console.table(generalAudience);
}

