import { Router } from "./router.js";
import * as actions from "./actions.js";

export const routes = new Router();

routes.get("/", actions.rootAction);
routes.get("/routes", actions.routesAction);
routes.get("/todos", actions.listTodosAction);
routes.get("/todo", actions.getTodoAction);
routes.get("/todos/:id", actions.getTodoAction);
<<<<<<< HEAD
=======
routes.post("/todos", actions.addTodoAction);
>>>>>>> 7a5c702c7cfd5418b3ebdaa04804f9187bb2e550
routes.patch("/todos/:id/toggle", actions.toggleTodoAction);
routes.patch("/todos/:id/update", actions.updateTodoAction);
routes.delete("/todos/:id/remove", actions.removeTodoAction);
