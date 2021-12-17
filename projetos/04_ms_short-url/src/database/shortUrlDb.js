const db = localStorage;
const shortUrls = JSON.parse(db.getItem("shortUrls") || "[]");

export function listShortUrlDb(){
  return shortUrls;
}

export function addShortUrlsDb(object){
  shortUrls.push(object);
  db.setItem('shortUrls', JSON.stringify(shortUrls));
}

export function getShortUrlBySlug(slug){
  const urlFind = shortUrls.find(url => url.slug === slug);

  return urlFind;
}

export function updateVisitsUrlDb(slug){
  const shortUrl = getShortUrlBySlug(slug);
  shortUrl.visits++;
  db.setItem('shortUrls', JSON.stringify(shortUrls));
}
