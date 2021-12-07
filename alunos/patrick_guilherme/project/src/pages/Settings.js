import { onNavigate } from '../utils/onNavigate.js'

export function Settings() {
  return (
    <>
      <h1>Configurações</h1>
      <button onClick={() => onNavigate('/profile')}>Perfil</button>
      <button onClick={() => onNavigate('/settings')}>Configurações</button>
    </>
  )
}
