// import { API_KEY, BASE_URL, LANG } from "../env.js";

// tentativa de criar a initFetch retornando uma promise - Felipe e Sabrina
// export function initFetch(url){

//   return new Promise((resolve, reject) => {
//     var resposta;
//     fetch(url).then((resposta) => resposta.json()).then((data) => {
//         resposta = data;
//         console.log(resposta);
//         return data});
//     setTimeout(()=> {resolve(resposta)}, 500);
//   }).catch((err) => {
//     console.log("Deu erro: \n", err);
// })

// }



export const initFetch = async (url) => {
  const pesquisa = await fetch(url);
  return pesquisa.json();
};

/* 
  export const initFetch = url => {
    return fetch(url);
  }
*/
