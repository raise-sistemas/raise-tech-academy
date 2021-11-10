import { API_KEY, BASE_URL_API } from "../env.js";

export async function listarEmBreve() {
    
    const url = `${BASE_URL_API}movie/upcoming?api_key=${API_KEY}&language=pt-BR`;

    const resposta = await fetch(url);
    const json = await resposta.json();
    const upcoming = json.results.map((emBreve) => emBreve.title);
    
    console.table(upcoming);
}
  