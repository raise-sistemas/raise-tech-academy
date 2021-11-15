import { cliMenu } from './utils/cliMenu.js'
import { listarGeneros } from './menus/listarGeneros.js'
import { listarPopulares } from './menus/listarPopulares.js'
import { listUpcoming } from './menus/listarEmBreve.js'
import { listarEmCartaz } from './menus/listarEmCartaz.js'
import { listarMaisRecente } from './menus/listarMaisRecente.js'
import { melhoresAvaliados } from './menus/listarMelhoresAvaliados.js'
import { pesquisaFilme } from './menus/pesquisaFilme.js'
import { buscarFilme } from './menus/buscarFilme.js'
import { listarEmAlta } from './menus/listarEmAlta.js'

const menu = [
  ['Listar Gêneros', listarGeneros],
  ['Filmes em Cartaz', listarEmCartaz], // https://developers.themoviedb.org/3/movies/get-now-playing Matheus/Leonardo Guaraná
  ['Em Breve nos Cinemas', listUpcoming], // https://developers.themoviedb.org/3/movies/get-upcoming Jorge/Nicole
  ['Melhores Avaliados', melhoresAvaliados], // https://developers.themoviedb.org/3/movies/get-top-rated-movies Felipe/Sabrina
  ['Mais Populares', listarPopulares], // https://developers.themoviedb.org/3/movies/get-popular-movies Paulo/Leonardo Lima
  ['Mais Recente', listarMaisRecente], // https://developers.themoviedb.org/3/movies/get-latest-movie Otávio/João
  ['Filmes em Alta', listarEmAlta], // https://developers.themoviedb.org/3/trending/get-trending movie/day Patrick/Guilherme
  ['Pesquisa por filme', pesquisaFilme], // Sabrina e Felipe
  ['Buscar por filme', buscarFilme]  // Leonardo e Matheus
]

while (await cliMenu('Menu DenoFlix', menu));

//Adicionar na listagem mais dois atributos, para mostrar no table;
//Filtrar filmes não adultos e adultos, duplicando a tabela e mostrando cada uma;
