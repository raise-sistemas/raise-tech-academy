import { API_KEY, BASE_URL, LANG_PTBR } from "../env.js";

export async function melhoresAvaliados(){
    const url = `${BASE_URL}movie/top_rated?api_key=${API_KEY}&${LANG_PTBR}`;
    const pesquisa = await fetch(url);
    const json = await pesquisa.json();
    const topRateds = json.results.map((result) => result.title);
    console.table(await topRateds); 
}