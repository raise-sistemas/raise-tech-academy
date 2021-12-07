export function userAuth(usuario, senha) {
  return usuario === sessionStorage.getItem("email") &&
    senha === sessionStorage.getItem("senha")
    ? true
    : false;
}
