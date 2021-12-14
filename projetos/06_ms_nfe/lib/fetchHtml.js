export async function fetchHtml(url) {
  return (await fetch(url)).text();
}
