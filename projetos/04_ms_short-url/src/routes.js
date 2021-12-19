import { Router } from "./router.js";
import * as shortUrlActions from "./actions/shortUrlActions.js";

export const routes = new Router();

routes.post("/", shortUrlActions.newUrlAction);
routes.post("/:slug", shortUrlActions.newUrlSlugAction);
routes.get("/", shortUrlActions.listUrlShorts);
routes.get("/:slug", shortUrlActions.getOriginalUrlAction);
