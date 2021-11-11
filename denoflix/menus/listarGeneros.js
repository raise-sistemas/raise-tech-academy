import { API_KEY, LANG } from "../env.js";

export async function listarGeneros() {
  const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=${LANG}`;

  const resposta = await fetch(url);
  const json = await resposta.json();
  const generos = json.genres.map((genero) => genero.name);
  console.table(generos);
}
