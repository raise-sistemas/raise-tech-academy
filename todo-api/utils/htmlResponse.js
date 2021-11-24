export function htmlResponse(body) {
  const headers = { "Content-Type": "text/html" };
  return new Response(body, { headers });
}
