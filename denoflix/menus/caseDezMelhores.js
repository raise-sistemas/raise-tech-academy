import { LANG, BASE_URL, API_KEY } from "../env.js";

export async function caseDezMelhores(result) {
  const url = `${BASE_URL}movie/top_rated?api_key=${API_KEY}&language=${LANG}`;
  const pesquisa = await fetch(url);
  const json = await pesquisa.json();
  const topRateds = json.results.map((result) => result.title);

  for (let i = 0; i < 10; i++) {
    result[i] = topRateds[i];
  }

  console.log("----- Os 10 Melhores Avaliados -----");
  console.table(result);
}
