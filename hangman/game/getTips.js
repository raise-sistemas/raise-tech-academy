import { BASE_URL } from "../env.js";

function fetchJson(path) {
  return fetch(`${BASE_URL}${path}`)
    .then((response) => response.json());
}

function fetchInfo(word) {
  return fetchJson(word).then((json) => json.shift());
}

function fetchSynonyms(word) {
  return fetchJson(`synonyms/${word}`);
}

export const getTips = async (word) => {
  const [info, synonyms] = await Promise.all([
    fetchInfo(word),
    fetchSynonyms(word),
  ]);

  return {
    class: info.class,
    synonyms,
  };
};
