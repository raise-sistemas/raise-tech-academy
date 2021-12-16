import * as shortUrlLib from '../libs/shortUrl-lib.js'; 

export async function newUrlAction(request) {
  const {url} = await request.json(); 
  
  return shortUrlLib.addShortUrl(url);
}

export async function newUrlSlugAction(request, { slug }) {
  const response = await request.json(); 
  const url = new URL(request.url);
  slug = slug || url.searchParams.get("slug");

  return shortUrlLib.addShortUrlSlug(slug, response.url);
}

export function listUrlShorts(){
  return shortUrlLib.getUrlShorts();
}

export function getOriginalUrlAction(request, { slug }) {
  const url = new URL(request.url);
  slug = slug || url.searchParams.get("slug");
  
  return `${shortUrlLib.getOriginalUrl(slug)}`;
}
