let hidden = false;

function handler() {
  showCursor();
  // Deno.close(Deno.stdin.rid);
  // Deno.setRaw(Deno.stdin.rid, false, { cbreak: true });
  Deno.exit();
}

export function hideCursor() {
  if (hidden) return;
  Deno.stdout.writeSync(new TextEncoder().encode("\x1B7\x1B[?25l"));
  hidden = true;
  // depois de esconder, precisa criar um hook para exibir novamente antes de sair do jogo.
  Deno.addSignalListener("SIGINT", handler);
}

function showCursor() {
  Deno.stdout.writeSync(new TextEncoder().encode("\x1B[?25h\x1B8"));
  hidden = false;
  Deno.removeSignalListener("SIGINT", handler);
}

globalThis.addEventListener("unload", handler);
