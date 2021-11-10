import { cliMenu } from "./utils/cliMenu.js";
import { listarGeneros } from "./menus/listarGeneros.js";

const menu = [
  ["Listar Gêneros", listarGeneros],
  ["Filmes em Cartaz", null], // https://developers.themoviedb.org/3/movies/get-now-playing Matheus/Leonardo Guaraná
  ["Em Breve nos Cinemas", null] // https://developers.themoviedb.org/3/movies/get-upcoming Jorge/Nicole
  ["Melhores Avaliados", null] // https://developers.themoviedb.org/3/movies/get-top-rated-movies Felipe/Sabrina
  ["Mais Populares", null] // https://developers.themoviedb.org/3/movies/get-popular-movies Paulo/Leonardo Lima
  ["Mais Recentes", null] // https://developers.themoviedb.org/3/movies/get-latest-movie Otávio/João
  ["Filmes em Alta", null], // https://developers.themoviedb.org/3/trending/get-trending movie/day Patrick/Guilherme
];

while (await cliMenu("Menu DenoFlix", menu));
