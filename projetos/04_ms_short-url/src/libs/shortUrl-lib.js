import { slugGenerate } from '../utils/slugGenerate.js';
import { urlFormat } from '../utils/urlFormat.js';
import * as db from '../database/shortUrlDb.js';

export function addShortUrl(original_url){
  const slug = slugGenerate();
  const newShortUrl = {
    slug,
    short_url: `https://short.url/${slug}`,
    original_url: urlFormat(original_url)
  }

  db.addShortUrlsDb(newShortUrl);

  return newShortUrl;
}

export function addShortUrlSlug(slug, original_url){
  const newShortUrl = {
    slug,
    short_url: `https://short.url/${slug}`,
    original_url: urlFormat(original_url)
  }

  db.addShortUrlsDb(newShortUrl);

  return newShortUrl;
}

export function getUrlShorts(){
  return db.getShortUrlsDb();
}

export function getOriginalUrl(slug){
  return db.getOriginalUrlDb(slug).original_url;
}
