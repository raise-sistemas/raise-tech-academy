import { onNavigate } from "../utils/onNavigate";

export function Settings() {
  return (
    <>
      <h1>Settings</h1>
      <button onClick={() => onNavigate("/dashboard")}>Voltar</button>
    </>
  );
}
