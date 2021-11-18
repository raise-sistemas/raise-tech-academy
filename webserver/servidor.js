const listener = Deno.listen({ port: 8000 });
console.clear();
console.log("listening on port", listener.addr.port);

for await (const conn of listener) {
  console.log("Nova Conexão!");
  const httpConn = Deno.serveHttp(conn);
  for await (const request of httpConn) {
    console.log("Novo Request");
    const response = new Response("Meu Primeiro Servidor!");
    request.respondWith(response);
  }
}
