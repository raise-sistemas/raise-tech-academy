import { onNavigate } from "../utils/onNavigate";

export function Login() {
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={() => onNavigate("/dashboard")}>
        <label>
          E-mail:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Senha:
          <input type="password" name="senha" />
        </label>
        <input type="submit" value="Entrar" />
      </form>
      <p />
      <button onClick={() => onNavigate("/")}>Voltar</button>
    </>
  );
}
