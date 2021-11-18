import { serve } from "https://deno.land/std@0.114.0/http/server.ts";

let count = 0;

await serve((request) => {
  count++;
  console.log("Novo Request");
  return new Response(`Visitas: ${count}`);
});
