import { Router } from "./router.js";
import * as actions from "./actions.js";

export const routes = new Router();

// Deno.version não está disponível no Deno Deploy
// https://github.com/alephjs/aleph.js/issues/409
// routes.get(
//   "/",
//   () =>
//     new Response(JSON.stringify(Deno.version, null, 2), {
//       headers: {
//         "content-type": "application/json",
//       },
//     }),
// );

routes.get("/", actions.rootAction);
routes.get("/routes", actions.routesAction);
routes.get("/todos", actions.listTodosAction);
routes.get("/todos/completed", actions.listTodosCompletedAction);
routes.get("/todo", actions.getTodoAction);
routes.get("/todos/:id", actions.getTodoAction);
routes.post("/todos", actions.addTodoAction);
routes.patch("/todos/:id/toggle", actions.toggleTodoAction);
routes.patch("/todos/:id/update", actions.updateTodoAction);
routes.delete("/todos/:id/remove", actions.removeTodoAction);
