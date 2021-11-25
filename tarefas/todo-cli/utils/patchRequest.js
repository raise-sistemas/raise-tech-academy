export async function patchRequest(url, params) {
  params = params || { method: 'PATCH' }
  const req = await fetch(url, params)
  return req.json()
}
