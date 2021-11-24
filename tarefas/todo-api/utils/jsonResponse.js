export function jsonResponse(payload) {
  const body = JSON.stringify(payload, null, 2);
  const headers = { "Content-Type": "application/json" };
  return new Response(body, { headers });
}
