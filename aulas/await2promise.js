// trocar por "http://httpbin.or/uuid" para simular um erro no fetch()
// trocar por "http://httpbin.org/xml" para simular um erro no .json()
const URL = "http://httpbin.org/uuid";

// versão preferencial com await, mais fácil de entender o código
async function uuidAwait() {
  const response = await fetch(URL);
  const json = await response.json();
  const uuid = json.uuid;

  return uuid;
}

// versão não recomendada por ser mais difícil de ler o código
function uuidPromise() {
  function executor(resolve, reject) {
    fetch(URL).then((response) => {
      return response.json().then((json) => {
        const uuid = json.uuid;
        resolve(uuid);
      });
    }).catch(reject);
  }

  return new Promise(executor);
}

// versão com Promise recomendada
function uuidPromise2() {
  function executor(resolve, reject) {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => json.uuid)
      .then(resolve)
      .catch(reject);
  }

  return new Promise(executor);
}

try {
  let uuid = await uuidAwait();
  // let uuid = await uuidPromise();
  // let uuid = await uuidPromise2();

  console.log(uuid);
} catch (e) {
  console.error("FALHA:", e.message);
}
