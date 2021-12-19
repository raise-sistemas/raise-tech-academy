import * as shortUrlLib from '../libs/shortUrl-lib.js'; 

function getSlug(request, slug){
  const url = new URL(request.url);
  slug = slug || url.searchParams.get("slug");

  return slug;
}

export async function newUrlAction(request) {
  const {url} = await request.json(); 
  
  return shortUrlLib.addShortUrl(url);
}

export async function newUrlSlugAction(request, { slug }) {
  const response = await request.json();
  slug = getSlug(request, slug); 

  return shortUrlLib.addShortUrlSlug(slug, response.url);
}

export function listUrlShorts(){
  return shortUrlLib.getShortUrls();
}

export function getOriginalUrlAction(request, { slug }) {
  slug = getSlug(request, slug);
  shortUrlLib.updateVisitorsCount(slug);

  return shortUrlLib.getOriginalUrl(slug);
}
