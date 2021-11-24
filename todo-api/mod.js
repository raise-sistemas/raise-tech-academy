import { serve } from "./deps.js";
import { todoServer } from "./todoServer.js";
import "./seed.js";

console.clear();
console.log("Running Server");

serve(todoServer);
