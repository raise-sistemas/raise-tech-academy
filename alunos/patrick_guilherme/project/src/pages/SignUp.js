import { onNavigate } from '../utils/onNavigate.js'

export function SignUp() {
  return (
    <>
      <h1>Cadastro</h1>
      <label>Nome: </label>
      <input placeholder="Digite seu nome" />
      <br></br>
      <label>email: </label>
      <input placeholder="Digite seu email" type="email" />
      <br></br>
      <label>Senha: </label>
      <input placeholder="Digite sua senha" type="email" />
      <br></br>
      <br></br>
      <button onClick={() => {}}>
        Cadastrar
      </button>
      <br></br>
      <br></br>
      <button onClick={() => console.log(localStorage.darkyMode)}>teste</button>
    </>
  )
}
