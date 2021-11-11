// deno-lint-ignore-file

import { API_KEY, BASE_URL, LANG } from "../env.js";
import { caseDezMelhores } from "./caseDezMelhores.js";
import { initFetch } from "../utils/initFetch.js";

//Código dando fetch em mais de uma página e enviando o top 10 ou o top 100 para o usúario

export async function melhoresAvaliados() {
  console.log("---- Escolha uma opcao ----");
  console.table(["Top 10 Melhores Filmes", "Top 100 Melhores Filmes"]);
  const escolha = +prompt();
  const result = [];
  let z = 0;
  switch (escolha) {
    case 0:
      await caseDezMelhores(result);
      break;

    case 1:
      for (let j = 1; j < 7; j++) {
        const url = `${BASE_URL}movie/top_rated?api_key=${API_KEY}&language=${LANG}&page=${j}`;
        const json = await initFetch(url);
        const topRateds = json.results.map((result) => {
          return {
            title: result.title,
            release: result.release_date,
          };
        });
        result.push(...topRateds);
      }
      const array = [{ tenso: "tenso" }, { tenso: "tenso" }];
      console.log("----- Os 100 Melhores Avaliados -----");
      // let resultTop100 = [];
      // for (let i = 0; i < 100; i++) {
      //   resultTop100[i] = result[i];
      // }
      console.table(
        result.slice(0, 100).sort((a, b) => {
          if (a.title == b.title) return 0;
          if (a.title < b.title) return -1;
          if (a.title > b.title) return 1;
        })
      );
      break;

    default:
      break;
  }
}

// Código exibindo apenas a primeira página

// export async function melhoresAvaliados(){
//     const url = `${BASE_URL}movie/top_rated?api_key=${API_KEY}&${LANG}`;
//     const pesquisa = await fetch(url);
//     const json = await pesquisa.json();
//     const topRateds = json.results.map((result) => result.title);
//     console.table(await topRateds);
// }
