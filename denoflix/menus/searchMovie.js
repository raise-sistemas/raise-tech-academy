import { initFetch } from "../utils/initFetch.js";
import { API_KEY, BASE_URL, LANG } from "../env.js";

export async function searchMovies() {
   
   const movie = prompt('Digite o nome do filme que deseja buscar:'); 
   const url = `${BASE_URL}search/movie?api_key=${API_KEY}&language=${LANG}&query=${movie}`;
   
   const json = await initFetch(url);
   const movieInfo = json.results.map((movie) => {
       return {
           title: movie.title,
           release_date: movie.release_date,
           popularity: movie.popularity,
       }
   })
   console.table(movieInfo);

}

