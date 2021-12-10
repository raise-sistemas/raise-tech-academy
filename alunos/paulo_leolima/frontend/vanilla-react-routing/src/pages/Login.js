import { onNavigate } from "../utils/onNavigate";
import { userAuth } from "../userAuth";
import { useState } from "react";

export function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <>
      <h1>Login</h1>
      <form
        onSubmit={() =>
          userAuth(usuario, senha)
            ? onNavigate("/dashboard")
            : onNavigate("/login")
        }
      >
        <label>
          <input
            type="email"
            placeholder="E-mail"
            value={usuario}
            onChange={() => setUsuario(usuario)}
          />
        </label>
        <br />
        <label>
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={() => setSenha(senha)}
          />
        </label>
        <br />
        <input type="submit" value="Entrar" />
      </form>
      <p />
      <button onClick={() => onNavigate("/")}>Voltar</button>
    </>
  );
}
