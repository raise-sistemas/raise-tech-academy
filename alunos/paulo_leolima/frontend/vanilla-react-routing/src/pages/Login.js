import { onNavigate } from "../utils/onNavigate";

function userAuth(usuario, senha) {
  return usuario === "pjniche@gmail.com" && senha === "123" ? true : false;
}

export function Login() {
  return (
    <>
      <h1>Login</h1>
      <form
        onSubmit={() =>
          userAuth(/*getElementById(email), getElementById(senha)*/)
            ? onNavigate("/dashboard")
            : onNavigate("/login")
        }
      >
        <label>
          E-mail:
          <input type="email" id="email" />
        </label>
        <br />
        <label>
          Senha:
          <input type="password" id="senha" />
        </label>
        <input type="submit" value="Entrar" />
      </form>
      <p />
      <button onClick={() => onNavigate("/")}>Voltar</button>
    </>
  );
}
