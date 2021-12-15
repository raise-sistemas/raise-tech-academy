import { parseNotaUrl } from './lib/parseNotaUrl.js'

export async function connectionHandler(request) {
  const url = new URL(request.url);

  const urlNota = url.searchParams.get('url');

  if(!urlNota) {
    return new Response("406: please provide a 'url' query param", { status: 406 });
  } 
  
  try {
    const parsedNota = await parseNotaUrl(urlNota);
 
    return new Response(JSON.stringify(parsedNota), { status: 200 });
  } 
  catch(_) {

    return new Response("406: invalid 'url' syntax", { status: 406 });
  }
  
}