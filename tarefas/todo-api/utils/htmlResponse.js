export function htmlResponse(body, status = 200) {
  const headers = { "Content-Type": "text/html" };
  return new Response(body, { status, headers });
}
