import { Router } from "./router.js";
import { handleCors } from "./utils/handleCors.js";
import * as actions from "./actions.js";

export const routes = new Router();

routes.options("/*", handleCors);
routes.get("/", actions.rootAction);
routes.get("/routes", actions.routesAction);

routes.get("/users/:user_id/todos", actions.listTodosAction);
routes.get("/users/:user_id/todo", actions.getTodoAction);
routes.get("/users/:user_id/todos/:id", actions.getTodoAction);
routes.post("/users/:user_id/todos", actions.addTodoAction);

/* rotas de CRUD de users
routes.get("/users")
routes.post("/users")
routes.get("/users/:id")
routes.get("/users/new{.html}?")

Cada usuário, terá os seguintes campos:
id: uuid gerado no momento da criação
nickname: Será utilizado na url
email: para fazer login
password: para fazer login

Fazer tratamento de nome de usuários:
José Francisco
jose-francisco
*/
