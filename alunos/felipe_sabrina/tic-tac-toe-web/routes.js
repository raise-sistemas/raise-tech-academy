import {serve} from "https://deno.land/std@0.115.1/http/server.ts";
import * as paths from "./path.js";


await serve((request) => {
  
  const url = new URL(request.url);
  switch (url.pathname) {
    case "/":
      return new Response(Deno.readTextFileSync(paths.indexHtml), {
          headers:{"Content-type": "text/html"}
      });

    case "/assets/app.css":
      return new Response(Deno.readTextFileSync(paths.css), {
          headers: {"Content-type": "text/css"}
      });

    case "/game/createBoard.js":
      return new Response(Deno.readTextFileSync(paths.createBoard), {
        headers: {
          "Content-Type": "application/javascript",
        },
      });
    case "/game/endGame.js":
    return new Response(Deno.readTextFileSync(paths.endGame), {
        headers: {
        "Content-Type": "application/javascript",
        },
    });
    case "/game/general.js":
        return new Response(Deno.readTextFileSync(paths.general), {
            headers: {
            "Content-Type": "application/javascript",
            },
        });
    case "/game/isWinner.js":
        return new Response(Deno.readTextFileSync(paths.isWinner), {
            headers: {
            "Content-Type": "application/javascript",
            },
        });
    case "/game/play.js":
        return new Response(Deno.readTextFileSync(paths.play), {
            headers: {
            "Content-Type": "application/javascript",
            },
        });
    case "/game/restart.js":
        return new Response(Deno.readTextFileSync(paths.restart), {
            headers: {
            "Content-Type": "application/javascript",
            },
        });
    case "/game/isBoardFull.js":
    return new Response(Deno.readTextFileSync(paths.isBoardFull), {
        headers: {
        "Content-Type": "application/javascript",
        },
    });
    case "/images/x.png":
        return new Response(Deno.readFileSync(paths.x), {
            headers: {"Content-type": "image/png"}
        })
    case "/images/o.png":
        return new Response(Deno.readFileSync(paths.o), {
            headers: {"Content-type": "image/png"}
        })
    default:
      return new Response("Página Não Encontrada", { status: 404 });
  }
});