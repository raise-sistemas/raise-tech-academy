import { API_KEY, BASE_URL, LANG } from "../env.js";

export async function listarMaisRecente() {
  const url = `${BASE_URL}movie/latest?api_key=${API_KEY}&language=${LANG}`;

  const resposta = await fetch(url);
  const json = await resposta.json();
  // console.log(json);
  // const title = [json.title];
  console.table([json.title]);
}
