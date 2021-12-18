import React from "react";
import {Link} from "react-router-dom";

export default function ConfirmacaoPedido(){
    return(
        <h1>Seu pedido foi concluído, veja em <Link to="/pedidos">Pedidos</Link></h1>
    )
}