import { serve } from "./deps.js";
import { shortUrlServer } from "./src/shortUrlServer.js";

console.clear();
console.log("Server started");

serve(shortUrlServer);
