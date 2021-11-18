import { serve } from "https://deno.land/std@0.114.0/http/server.ts";

let count = 0;
let ultimaVisita = new Date();

await serve((request) => {
  count++;
  ultimaVisita = new Date();
  const body = JSON.stringify({ count, ultimaVisita });
  return new Response(body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
});
