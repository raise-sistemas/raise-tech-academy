/*
https://github.com/dyedgreen/deno-jsx/blob/main/mod.ts
https://github.com/dsego/ssr_jsx/blob/main/mod.js
https://deno.land/x/nano_jsx@v0.0.25/core.ts
https://github.com/stagas/vdomini?ref=bestofreactjs.com
*/

function renderProps(props) {
  return Object.entries(props)
    .map(([key, value]) => ` ${key}="${value}"`)
    .join("");
}

const inlineTags =
  "area base basefont br col embed hr img input keygen link meta param source spacer track wbr".split(
    " "
  );

export function h(tag, props, ...children) {
  children = children.join("");
  if (tag === h) return children; // Fragment
  if (typeof tag !== "string") return tag({ ...props, children });
  if (inlineTags.includes(tag)) {
    return `<${tag}${renderProps(props || {})} />`;
  } else {
    return `<${tag}${renderProps(props || {})}>${children}</${tag}>`;
  }
}
