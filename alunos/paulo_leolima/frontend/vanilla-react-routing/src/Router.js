import { useRouting } from "./hooks/useRouting";
import { Routes } from "./Routes";

export function Router() {
  const [path] = useRouting();

  return (
    <>
      <h1>Navbar</h1>
      <div>
        {Routes[path] ? Routes[path] : <div>Página não encontrada.</div>}
      </div>
    </>
  );
}
