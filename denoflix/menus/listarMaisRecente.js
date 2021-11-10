import { API_KEY, BASE_URL, LANG_PTBR } from "../env.js";

export async function listarMaisRecente() {
  const url =
    `${BASE_URL}movie/latest?api_key=${API_KEY}&${LANG_PTBR}`;

  const resposta = await fetch(url);
  const json = await resposta.json();
  const title = [json.title];
  console.table(title);
}
