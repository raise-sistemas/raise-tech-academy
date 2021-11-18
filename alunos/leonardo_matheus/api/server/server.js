import { serve } from "https://deno.land/std@0.114.0/http/server.ts"
import { router } from "./router.js"

await serve((request) => {
  return router(request)
}) 