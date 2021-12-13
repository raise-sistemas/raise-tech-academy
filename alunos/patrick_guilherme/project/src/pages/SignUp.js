import { onNavigate } from '../utils/onNavigate.js'
import { generateKey } from '../utils/generateKey'
import { Profile } from './Profile.js'

function signup() {
  const email = document.querySelector('.email')
  const name = document.querySelector('.name')
  const password = document.querySelector('.password')
  const key = generateKey(50)

  if (email.value && name.value && password.value) {
    const user = {
      email: email.value,
      name: name.value,
      password: password.value,
      key: key
    }

    const json = JSON.stringify(user)
    localStorage.setItem(`User ${localStorage.length + 1}`, json)

    

  } else {
    alert('Insira todos os dados!')
  }
}

export function SignUp() {
  return (
    <>
      <h1>Cadastro</h1>
      <label>Nome: </label>
      <input placeholder="Digite seu nome" class="name" />
      <br></br>
      <label>email: </label>
      <input placeholder="Digite seu email" type="email" class="email" />
      <br></br>
      <label>Senha: </label>
      <input placeholder="Digite sua senha" type="password" class="password" />
      <br></br>
      <br></br>
      <button onClick={() => signup()}>Cadastrar</button>
      <br></br>
      <br></br>
      <button onClick={() => onNavigate('/')}>Página inicial</button>
    </>
  )
}
