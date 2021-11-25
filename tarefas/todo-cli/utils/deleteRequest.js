/*
export async function deleteRequest(url, params) {
    params = params || { method: 'DELETE' }
    const req = await fetch(url, params)
    return req.json()
  }
*/
export async function deleteRequest(url, payload, params) {
  const defaultParams = {
    body: JSON.stringify(payload),
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  };
  const init = { ...defaultParams, ...params };
  const req = await fetch(url, init);
  return req.json();
}
