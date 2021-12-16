import { serve } from "./deps.js";
import { shortUrlServer } from "./shortUrlServer.js";

// localStorage.clear();

console.clear();
console.log("Server started");

serve(shortUrlServer);
