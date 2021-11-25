export async function deleteRequest(url, params) {
    params = params || { method: 'DELETE' }
    const req = await fetch(url, params)
    return req.json()
  }
  