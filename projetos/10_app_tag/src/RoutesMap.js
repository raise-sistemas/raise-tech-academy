import Home from './components/Home';
import Cadastrar from './components/Cadastrar';
import Cabecalho from './components/Cabecalho';
import addTag from './actions/addTag';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const data = addTag();
export default function RoutesMap() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Routes>
        <Route path='/' element={<Home data={data} />} />
        <Route path='/cadastrar' element={<Cadastrar />} />
        <Route
          path='*'
          element={
            //FIXME Essa div pode virar um componente isolado, e dps ser importado aqui.
            <div>
              <h2>
                ERRO: 404 <br /> PAGINA NÃO ENCONTRADA
              </h2>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
