const urlShorts = JSON.parse(localStorage.getItem("urlShorts") || "[]");
import { slugGenerate } from '../utils/slugGenerate.js';
import { urlFormat } from '../utils/urlFormat.js';

export function addShortUrl(original_url){
  const slug = slugGenerate();
  const newShortUrl = {
    slug,
    short_url: `https://short.url/${slug}`,
    original_url: urlFormat(original_url)
  }

  urlShorts.push(newShortUrl);
  localStorage.setItem('urlShorts', JSON.stringify(urlShorts));

  return newShortUrl;
}

export function addShortUrlSlug(slug, original_url){
  const newShortUrl = {
    slug,
    short_url: `https://short.url/${slug}`,
    original_url: urlFormat(original_url)
  }
  urlShorts.push(newShortUrl);
  localStorage.setItem('urlShorts', JSON.stringify(urlShorts));

  return newShortUrl;
}

export function getUrlShorts(){
  return urlShorts;
}

export function getOriginalUrl(slug){
  const urlFind = urlShorts.find(url => url.slug === slug);

  return urlFind.original_url;
}
