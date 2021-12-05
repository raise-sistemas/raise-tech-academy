import { onNavigate } from "../utils/onNavigate";

export function Home() {
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => onNavigate("/login")}>Login</button>
    </>
  );
}
