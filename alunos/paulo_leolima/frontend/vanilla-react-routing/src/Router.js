import { useRouting } from "./hooks/useRouting";
import { Routes } from "./Routes";

export function Router() {
  //const [path] = useRouting(); <-- como passado na aula.
  const path = useRouting();

  return (
    <>
      <h1>Raise Tech Academy</h1>
      <div>
        {Routes[path] ? Routes[path] : <div>Página não encontrada.</div>}
      </div>
    </>
  );
}
