import { API_KEY, LANG } from "../env.js";

export async function listarPopulares() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=${LANG}`;

  const resposta = await fetch(url);
  const json = await resposta.json();
  const populares = json.results.map((resultado) => resultado.title);
  console.table(populares);
}
