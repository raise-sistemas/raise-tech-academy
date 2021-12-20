import { slugGenerate } from '../utils/slugGenerate.js';
import { isSlugValid } from '../utils/isSlugValid.js';
import { urlFormat } from '../utils/urlFormat.js';
import * as db from '../database/shortUrlDb.js';

const BASE_SHORT_URL = 'https://short.url';

export function updateVisitorsCount(slug){
  db.updateVisitsUrlDb(slug);
}

export function addShortUrl(original_url){
  const slug = slugGenerate();
  const newShortUrl = {
    slug,
    short_url: `${BASE_SHORT_URL}/${slug}`,
    original_url: urlFormat(original_url),
    visits: 0
  }

  db.addShortUrlsDb(newShortUrl);

  return newShortUrl;
}

export function addShortUrlSlug(slug, original_url){
  if(!isSlugValid(slug))
    throw 'Slug already exists';

  const newShortUrl = {
    slug,
    short_url: `${BASE_SHORT_URL}/${slug}`,
    original_url: urlFormat(original_url),
    visits: 0
  }

  db.addShortUrlsDb(newShortUrl);

  return newShortUrl;
}

export function getShortUrls(){
  return db.listShortUrlDb();
}

export function getOriginalUrl(slug){
  const shortUrlFind =   db.getShortUrlBySlug(slug);

  if(!shortUrlFind)
    throw "Short url not found!";
  
  return shortUrlFind.original_url;
}
