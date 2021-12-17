import { slugGenerate } from '../utils/slugGenerate.js';
import { isSlugValid } from '../utils/isSlugValid.js';
import { urlFormat } from '../utils/urlFormat.js';
import * as db from '../database/shortUrlDb.js';

export function updateVisitorsCount(slug){
  db.updateVisitsUrlDb(slug);
}

export function addShortUrl(original_url){
  const slug = slugGenerate();
  const newShortUrl = {
    slug,
    short_url: `https://short.url/${slug}`,
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
    short_url: `https://short.url/${slug}`,
    original_url: urlFormat(original_url),
    visits: 0
  }

  db.addShortUrlsDb(newShortUrl);

  return newShortUrl;
}

export function getUrlShorts(){
  return db.listShortUrlDb();
}

export function getOriginalUrl(slug){  
  return db.getShortUrlBySlug(slug).original_url;
}
