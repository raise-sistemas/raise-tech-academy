import { BaseRouter } from "../deps.js";

export class Router extends BaseRouter {
  prefix = "";

  constructor(prefix = "") {
    super();
    this.prefix = prefix;
  }

  toArray() {
    return Object.keys(this.routes).map((method) =>
      this.routes[method].map((o) => `${method} ${o.pattern.pathname}`)
    ).filter((array) => array.length > 0).flat();
  }

  add(method, pathname, handler) {
    pathname = this.prefix + pathname;
    this.routes[method].push({
      pattern: new URLPattern({ pathname }),
      handler,
    });

    return this;
  }

  match({ method, url }) {
    for (const r of this.routes[method]) {
      const route = r.pattern.exec(url);
      if (route) {
        return {
          handler: r.handler,
          params: route.pathname.groups,
        };
      }
    }
    
    return false;
  }
}
