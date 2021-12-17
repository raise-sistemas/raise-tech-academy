const KEY = "ap147ldokdmra00kmbrgkdk2mgja75p1km5gnvjdnefhhfkdna5asd2lwlm6fkaweiuitnbl";

export function apiKeyResquest({headers}) {
  const authorization = headers.get("key");

  if (authorization !== KEY)
    throw "Invalid Key";
}
