import { API_KEY, BASE_URL, LANG } from "../env.js";

export async function listarEmBreve() {
  const url = `${BASE_URL}movie/upcoming?api_key=${API_KEY}&language=${LANG}`;

  const resposta = await fetch(url);
  const json = await resposta.json();
  const upcoming = json.results.map((emBreve) => emBreve.title);

  console.table(upcoming);
}
