// deno-lint-ignore-file

import { caseDezMelhores } from "./caseDezMelhores.js";
import { caseCemMelhores } from "./caseCemMelhores.js";

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
      await caseCemMelhores(result);
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
