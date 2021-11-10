import { API_KEY } from "../env.js";

export async function listarPopulares() {
  const url =
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`;

  const resposta = await fetch(url);
  const json = await resposta.json();
  const populares = json.results.map((resultado) => resultado.title);
  console.table(populares);
}
