export function jsonResponse(payload, status = 200) {
  if (payload === undefined) payload = null;
  const body = JSON.stringify(payload, null, 2);
  const headers = { "Content-Type": "application/json" };
  return new Response(body, { status, headers });
}
