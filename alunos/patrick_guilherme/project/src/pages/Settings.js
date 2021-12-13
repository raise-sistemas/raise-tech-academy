import { onNavigate } from '../utils/onNavigate.js'
import { ProfileLogin } from '../utils/profile-login.js'

export function Settings() {
  return (
    <>
      <h1>Configurações</h1>
      <button onClick={ProfileLogin}>Perfil</button>
      <button onClick={() => onNavigate('/settings')}>Configurações</button>
      <button onClick={() => onNavigate('/')}>Página inicial</button>
    </>
  )
}
