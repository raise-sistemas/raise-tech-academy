import * as db from '../database/shortUrlDb.js';

export function isSlugValid(slug){
  const listShortUrl = db.listShortUrlDb();
  
  if(listShortUrl.filter(url => url.slug === slug).length)
    return false;
  
  return true;
}