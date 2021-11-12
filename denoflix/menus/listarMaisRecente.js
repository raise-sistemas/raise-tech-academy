import { API_KEY, BASE_URL, LANG } from "../env.js";
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

  const filme = {
    'Título': resposta.title,
    'Status': resposta.status,
    'Adulto': (resposta.adulto) ? 'Sim' : 'Não',
    'Página no IMDB': (resposta.imdb_id) ? `https://www.imdb.com/title/${resposta.imdb_id}` : 'Indisponível',
    'Idioma': (linguagem.length) ? linguagem[0].idioma : 'Indisponível',
    'Código idioma': (linguagem.length) ? linguagem[0].codigo : 'Indisponível',
  }

  console.table([filme]);
}

/*
  //Implementação utilizando Promises

  export function listarMaisRecente() {
    const url = `${BASE_URL}movie/latest?api_key=${API_KEY}&language=${LANG}`;

    initFetch(url)
    .then(resposta => resposta.json())
    .then(dados => {
      if(!dados.spoken_languages)
        throw 'Erro ao consultar API';

      const linguagem = dados.spoken_languages.map(lang => {
        return {
          idioma: lang.english_name,
          codigo: lang.iso_639_1
        };
      });

      const filme = {
        'Título': dados.title,
        'Status': dados.status,
        'Adulto': (dados.adulto) ? 'Sim' : 'Não',
        'Página no IMDB': (dados.imdb_id) ? 'https://www.imdb.com/title/' + dados.imdb_id : 'Indisponível',
        'Idioma': (linguagem.length) ? linguagem[0].idioma : 'Indisponível',
        'Código idioma': (linguagem.length) ? linguagem[0].codigo : 'Indisponível',
      }

      console.table([filme]);
    }).catch(erro => console.error(erro));
  }
*/