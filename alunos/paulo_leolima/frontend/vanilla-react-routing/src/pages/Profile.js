import { onNavigate } from "../utils/onNavigate";

export function Profile() {
  return (
    <>
      <h1>Profile</h1>
      <button onClick={() => onNavigate("/dashboard")}>Voltar</button>
    </>
  );
}
