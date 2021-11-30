function TodoItem({ todo  }) {
    const icon = todo.completed ? "⭕" : "✔️";
    const title = todo.completed ? React.createElement("s", null, todo.title) : todo.title;
    return React.createElement("li", null, React.createElement("button", {
        onClick: "toggleTodo('${todo.id}')"
    }, icon), title, React.createElement("button", {
        onClick: "deleteTodo('${todo.id}')"
    }, "✖️"));
}
function ListTodos({ todos , children  }) {
    const lis = todos.map((todo)=>React.createElement(TodoItem, {
            todo: todo
        })
    ).join("\n");
    return React.createElement("ol", null, lis, children);
}
function App({ todos  }) {
    const activeTodos = todos.filter((todo)=>!todo.completed
    );
    const qtyActiveTodos = activeTodos.length;
    const completedTodos = todos.filter((todo)=>todo.completed
    );
    const qtyCompletedTodos = completedTodos.length;
    return React.createElement(React.Fragment, null, React.createElement("h1", null, "Lista de Compras"), React.createElement("h2", null, "Produtos para Comprar (", qtyActiveTodos, ")"), React.createElement(ListTodos, {
        todos: activeTodos
    }, React.createElement("li", null, React.createElement("input", {
        type: "text",
        onKeyPress: "newTodoOnKeyPress(event)"
    }))), React.createElement("hr", null), React.createElement("h2", null, "Produtos Comprados (", qtyCompletedTodos, ")"), React.createElement(ListTodos, {
        todos: completedTodos
    }));
}
const todos = [
    buildTodo("Pão Francês"),
    buildTodo("Leite Integral"),
    buildTodo("Margarina Qualy 500g", true), 
];
globalThis.todos = todos;
function buildTodo(title, completed = false) {
    return {
        id: crypto.randomUUID(),
        title,
        completed
    };
}
function renderProps(props) {
    return Object.entries(props).map(([key, value])=>` ${key}="${value}"`
    ).join("");
}
const inlineTags = "area base basefont br col embed hr img input keygen link meta param source spacer track wbr".split(" ");
function h(tag, props, ...children) {
    children = children.join("");
    if (tag === h) return children;
    if (typeof tag !== "string") return tag({
        ...props,
        children
    });
    if (inlineTags.includes(tag)) {
        return `<${tag}${renderProps(props || {
        })} />`;
    } else {
        return `<${tag}${renderProps(props || {
        })}>${children}</${tag}>`;
    }
}
globalThis.React = {
    createElement: h,
    Fragment: h
};
function render() {
    const root = document.getElementById("root");
    root.innerHTML = App({
        todos
    });
}
render();
