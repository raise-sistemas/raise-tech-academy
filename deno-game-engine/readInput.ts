// para utilizar essa função, precisa rodar o deno com a flag: --unstable devido ao comando Deno.setRaw
// retorna os bytes lidos
export async function readInput() {
  // cria um array binário de bytes
  const data = new Uint8Array(8);
  // liga o modo de leitura imediata, sem ela a leitura ocorre apenas após pressionar CTRL+D
  Deno.setRaw(Deno.stdin.rid, true, { cbreak: true });
  // aguarda n bytes de input
  const nread = await Deno.stdin.read(data);
  // desliga o modo de leitura imediata
  Deno.setRaw(Deno.stdin.rid, false, { cbreak: true });
  // retorna null se nao leu nada (nao consegui reproduzir)
  if (nread === null) return data;
  // converte os n bytes para string
  return data.subarray(0, nread);
}
