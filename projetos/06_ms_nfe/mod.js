import { parse } from './parser/parse.js';

const raw = await Deno.readTextFile('./fixtures/nota0.html');

console.log(await parse(raw));