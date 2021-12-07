import { onNavigate } from '../utils/onNavigate.js'
export function Profile() {
  return (
    <>
      <h1>Seu nome</h1>
      <button onClick={() => onNavigate('/')}>Página inicial</button>
      <button onClick={() => onNavigate('/settings')}>Configurações</button>
    </>
  )
}
