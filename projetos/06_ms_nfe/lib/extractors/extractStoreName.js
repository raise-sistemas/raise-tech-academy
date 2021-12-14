// exemplo de trecho do html
// txtTopo">IRMAOS MUFFATO S A<
export function extractStoreName(html) {
  return html.match(/txtTopo">(.+)</)?.[1] || "";
}
