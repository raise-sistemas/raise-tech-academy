import { API_KEY, BASE_URL, LANG } from "../env.js";
import { initFetch } from "../utils/initFetch.js";

export async function pesquisaFilme(){
    const filme = prompt();
    const url = `${BASE_URL}search/movie?api_key=${API_KEY}&language=${LANG}&query=${filme}`;
    const json = await initFetch(url);

    const filmesEncontrados = json.results.map((result) => {
        return {
            title: result.title,
            release_date: result.release_date,
        };
    });
    console.log("----- Filmes encontrados -----");
    console.table(filmesEncontrados);
    console.log("Digite o index do filme que deseja");
    const index = +prompt();

    const escolhido = {
        title: json.results[index].title,
        release_date: json.results[index].release_date,
        popularity: json.results[index].popularity,
        vote: json.results[index].vote_average,
        adult: json.results[index].adult==true?"Sim":"Não",
        // overview: json.results[index].overview

    }

    console.table(escolhido);

}