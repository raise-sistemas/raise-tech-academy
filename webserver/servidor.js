const listener = Deno.listen({ port: 8000 });
console.clear();
console.log("listening on port", listener.addr.port);

async function handleConnection(conn) {
  const httpConn = Deno.serveHttp(conn);
  for await (const request of httpConn) {
    console.log("Novo Request");
    const response = new Response("Meu Primeiro Servidor!");
    request.respondWith(response);
  }
}

for await (const conn of listener) {
  console.log("Nova Conexão!");
  // se colocar await abaixo, trava novas conexões
  handleConnection(conn);
}
