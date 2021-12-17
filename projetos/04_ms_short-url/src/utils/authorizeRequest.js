const KEY = "ap147ldokdmra00kmbrgkdk2mgja75p1km5gnvjdnefhhfkdna5asd2lwlm6fkaweiuitnbl";

export function authorizeRequest({headers}) {
  const authorization = headers.get("authorization")?.split(' ')[1];

  if (!(authorization === KEY))
    throw "Acesso Negado";
}
