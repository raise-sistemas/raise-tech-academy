// function handler(event) {
//   const response = new Response("Hello World 3");
//   event.respondWith(response);
// }

// addEventListener("fetch", handler);

// const listener = Deno.listen({ port: 8080 });
// console.log("listening on port", listener.addr.port);

// function handler(_request) {
//   return new Response("ok");
// }

// async function handleConn(conn) {
//   const httpConn = Deno.serveHttp(conn);
//   for await (const e of httpConn) {
//     dispatchEvent(e);
//     // e.respondWith(handler(e.request, conn));
//   }
// }

// for await (const conn of listener) {
//   handleConn(conn);
// }

import { serve } from "https://deno.land/std@0.114.0/http/server.ts";

await serve((req) => {
  console.log(req);
  return "teste";
  // return new Response("Hello");
});
