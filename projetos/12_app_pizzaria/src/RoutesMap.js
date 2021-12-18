// import Cardapio from "./components/Cardapio";
// import Finalizacao from "./components/Finalizacao";
import Home from "./components/Home";
import NavMenu from "./components/NavMenu"
import Pedido from "./components/Pedido";
import Pedidos from "./components/Pedidos";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function RoutesMap(){
    return(
        <BrowserRouter>
            <NavMenu/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/pedido' element={<Pedido/>}/>
                <Route path='/pedidos' element={<Pedidos/>}/>
            </Routes>
        </BrowserRouter>

    )
}