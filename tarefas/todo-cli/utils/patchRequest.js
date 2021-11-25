export async function patchRequest(url, payload, params) {
  const defaultParams = {
    body: JSON.stringify(payload),
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
  };
  const init = { ...defaultParams, ...params };
  const req = await fetch(url, init);
  return req.json();
}
