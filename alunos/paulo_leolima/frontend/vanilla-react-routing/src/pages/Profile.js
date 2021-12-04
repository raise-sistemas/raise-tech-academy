import { onNavigate } from "../utils/onNavigate";

export function Profile() {
  return (
    <>
      <h1>Name</h1>
      <button onClick={() => onNavigate("/")}>Voltar</button>
    </>
  );
}
