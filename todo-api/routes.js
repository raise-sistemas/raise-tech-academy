import { Router } from "./router.js";
import * as actions from "./actions.js";

export const routes = new Router();

function handleCors() {
  return new Response(null, { status: 204 });
}

routes.options("/*", handleCors);
routes.get("/", actions.rootAction);
routes.get("/routes", actions.routesAction);
routes.get("/todos", actions.listTodosAction);
routes.get("/todo", actions.getTodoAction);
routes.get("/todos/:id", actions.getTodoAction);
routes.post("/todos", actions.addTodoAction);
