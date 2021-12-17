import Home from './components/Home';
import Cadastrar from './components/Cadastrar';
import Cabecalho from './components/Cabecalho';
import Page404 from './components/Page404';



import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function RoutesMap() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cadastrar' element={<Cadastrar />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
