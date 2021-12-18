// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// for (let i = 0; i <= 1000; i++) {
//   console.clear();
//   console.log(i);
//   await sleep(100);
// }

let i = 0;
const id = setInterval(runGameIteration, 10);

function runGameIteration() {
  console.clear();
  console.log(i);
  i++;
  if (i > 1000) clearInterval(id);
}
