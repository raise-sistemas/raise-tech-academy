export function newParamsResponseJson(payload, status){
  const headers = { 'Content-Type': 'application/json' };
  const init = {status, headers};
  const body = JSON.stringify(payload, null, 2);

  return [body, init];
}