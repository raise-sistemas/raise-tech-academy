const db = localStorage;
const shortUrls = JSON.parse(db.getItem("shortUrls") || "[]");

export function getShortUrlsDb(){
  return shortUrls;
}

export function addShortUrlsDb(object){
  shortUrls.push(object);
  db.setItem('shortUrls', JSON.stringify(shortUrls));
}

export function getOriginalUrlDb(slug){
  const urlFind = shortUrls.find(url => url.slug === slug);

  return urlFind;
}
