// import { API_KEY, BASE_URL, LANG } from "../env.js";

export const initFetch = async (url) => {
  const pesquisa = await fetch(url);
  return pesquisa.json();
};

/* 
  export const initFetch = url => {
    return fetch(url);
  }
*/
