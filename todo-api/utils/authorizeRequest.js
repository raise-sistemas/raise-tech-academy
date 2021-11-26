const CHAVE = "sk_fbt5cahT3BbHAXZy";

export function authorizeRequest(request) {
  const authorization = request.headers.get("authorization")?.match(
    /Basic (.+)/i,
  )?.[1];

  if (!(authorization === CHAVE)) {
    throw "Acesso Negado";
  }
}
