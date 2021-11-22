// https://deno.land/x/nativerouter@1.0.0

const up = new URLPattern({ pathname: "/todos/:id" });

const match = up.exec("http://localhost:8000/todos/123");
console.log(match.pathname.groups);

const noMatch = up.exec("http://localhost:8000/todos/123/toggle");
console.log(noMatch);

const method = "GET";

const url = "http://localhost:8000/todos/123";

switch (method) {
  case "GET":
    const todosPattern = new URLPattern({ pathname: "/todos" });
    const todoPattern = new URLPattern({ pathname: "/todos/:id" });
    if (todosPattern.test(url)) {
    }
    if (todoPattern.test(url)) {
      const match = todoPattern.exec(url);
      todoAction(match.pathname.groups.id);
    }
    break;
  case "POST":
    const todosPattern = new URLPattern({ pathname: "/todos" });
    break;
}
