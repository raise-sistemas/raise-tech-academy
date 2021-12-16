export function redirectResponse(payload, status = 301) {
  if (payload === undefined) 
    payload = null;
  
  const headers = {location: payload};

  return new Response(null, {status, headers});
}
