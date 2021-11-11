// deno-lint-ignore-file

import { API_KEY, BASE_URL, LANG_PTBR } from "../env.js";

//Código dando fetch em mais de uma página e enviando o top 10 ou o top 100 para o usúario

export async function melhoresAvaliados() {
  console.log("---- Escolha uma opcao ----");
  console.table(["Top 10 Melhores Filmes", "Top 100 Melhores Filmes"]);
  const escolha = +prompt();
  const result = [];
  let z = 0;
  switch (escolha) {
    case 0:
      const url = `${BASE_URL}movie/top_rated?api_key=${API_KEY}&${LANG_PTBR}`;
      const pesquisa = await fetch(url);
      const json = await pesquisa.json();
      const topRateds = json.results.map((result) => result.title);

      for (let i = 0; i < 10; i++) {
        result[i] = topRateds[i];
      }

      console.log("----- Os 10 Melhores Avaliados -----");
      console.table(result);
      break;

    case 1:
      for (let j = 1; j < 7; j++) {
        const url = `${BASE_URL}movie/top_rated?api_key=${API_KEY}&${LANG_PTBR}&page=${j}`;
        const pesquisa = await fetch(url);
        const json = await pesquisa.json();
        const topRateds = json.results.map((result) => result.title);

        for (let i = 0; i < topRateds.length; i++) {
          result[z] = topRateds[i];
          z++;
        }
      }

      console.log("----- Os 100 Melhores Avaliados -----");
      let resultTop100 = [];
      for (let i = 0; i < 100; i++) {
        resultTop100[i] = result[i];
      }

      console.table(resultTop100);
      break;

    default:
      break;
  }
}

melhoresAvaliados();
// Código exibindo apenas a primeira página

// export async function melhoresAvaliados(){
//     const url = `${BASE_URL}movie/top_rated?api_key=${API_KEY}&${LANG_PTBR}`;
//     const pesquisa = await fetch(url);
//     const json = await pesquisa.json();
//     const topRateds = json.results.map((result) => result.title);
//     console.table(await topRateds);
// }
