import { API_KEY, BASE_URL, LANG_PTBR } from "../env.js";

export async function listarEmCartaz() {
  const url =
    `${BASE_URL}movie/now_playing?api_key=${API_KEY}&${LANG_PTBR}`;

  const resposta = await fetch(url);
  const json = await resposta.json();
  const emCartaz = json.results.map((movie) => movie.title);
  console.table(emCartaz);
}


