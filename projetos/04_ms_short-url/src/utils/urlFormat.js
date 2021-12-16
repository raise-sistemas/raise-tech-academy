export function urlFormat(url) {
  if(url.match('http://') || url.match('https://'))
    return url;
  
  return `https://${url}`;
}
