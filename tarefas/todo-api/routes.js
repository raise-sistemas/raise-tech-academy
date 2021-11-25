import { Router } from "./router.js";
import * as actions from "./actions.js";

export const routes = new Router();

routes.get("/", actions.rootAction);
routes.get("/routes", actions.routesAction);
routes.get("/todos", actions.listTodosAction);
routes.get("/todo", actions.getTodoAction);
routes.get("/todos/:id", actions.getTodoAction);
routes.post("/todos", actions.addTodoAction);
routes.patch("/todos/:id/toggle", actions.toggleTodoAction);
routes.patch("/todos/:id/update", actions.updateTodoAction);
routes.delete("/todos/:id/remove", actions.removeTodoAction);
