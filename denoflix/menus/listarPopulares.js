import { API_KEY, BASE_URL, LANG } from "../env.js";
import { initFetch } from "../utils/initFetch.js";

export async function listarPopulares() {
  const url = `${BASE_URL}movie/popular?api_key=${API_KEY}&language=${LANG}`;
  const json = await initFetch(url);
  const populares = json.results.map((resultado) => resultado.title);
  console.table(populares);
}
