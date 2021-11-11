import { API_KEY, BASE_URL, LANG, BASE_URL_IMDB } from "../env.js";
import { initFetch } from '../utils/initFetch.js';

export async function listarMaisRecente() {
  const url = `${BASE_URL}movie/latest?api_key=${API_KEY}&language=${LANG}`;
  const resposta = await initFetch(url);

  const linguagem = resposta.spoken_languages.map(lang => {
    return {
      idioma: lang.english_name,
      codigo: lang.iso_639_1
    };
  });

  const movie = {
    'Título': resposta.title,
    'Status': resposta.status,
    'Adulto': (resposta.adulto) ? 'Sim' : 'Não',
    'Página no IMDB': (resposta.imdb_id) ? BASE_URL_IMDB + resposta.imdb_id : 'Indisponível',
    'Idioma': (linguagem.length) ? linguagem[0].idioma : 'Indisponível',
    'Código idioma': (linguagem.length) ? linguagem[0].codigo : 'Indisponível',
  }

  console.table([movie]);
}
