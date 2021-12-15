export function notFoundResponse({ method, url }) {
  const body = `NOT FOUND: ${method} ${url}`;
  return new Response(body, { status: 404 });
}
