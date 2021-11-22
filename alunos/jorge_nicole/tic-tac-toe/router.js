import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import aboutHtml from "./about.html.js";

console.clear();

await serve((request) => {
  count++;
  const url = new URL(request.url);
  switch (url.pathname) {
    case "/":
      return new Response("Bem Vindo!");

    case "/jogo":
        return new Response(Deno.readTextFileSync(indexHtml), {
            headers:{"Content-type": "text/html"}
        });
    default:
      return new Response("Página Não Encontrada", { status: 404 });
  }
});