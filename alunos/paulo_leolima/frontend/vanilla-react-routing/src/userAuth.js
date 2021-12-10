// Usuário teste.
sessionStorage.setItem("email", "pjniche@gmail.com");
sessionStorage.setItem("senha", "123");

export function userAuth(usuario, senha) {
  return usuario === sessionStorage.getItem("email") &&
    senha === sessionStorage.getItem("senha")
    ? true
    : false;
}
