import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import aboutHtml from "./about.html.js";

console.clear();
let count = 0;

await serve((request) => {
  count++;
  const url = new URL(request.url);
  switch (url.pathname) {
    case "/":
      return new Response("Bem Vindo!");

    case "/visitas":
      return new Response(`Visitas no Site: ${count}`);

    case "/about":
      return new Response(aboutHtml, {
        headers: {
          "Content-Type": "text/html",
        },
      });
    default:
      return new Response("Página Não Encontrada", { status: 404 });
  }
});
