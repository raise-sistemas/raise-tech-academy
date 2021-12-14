import { extractor } from './extractor.js'

// exemplo de trecho do html
// txtTopo">IRMAOS MUFFATO S A<
export function extractStoreName(html) {
  return extractor(html, /txtTopo">(.+?)</);
}
