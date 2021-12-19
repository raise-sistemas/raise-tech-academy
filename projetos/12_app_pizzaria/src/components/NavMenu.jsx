import React from "react";
import {Link} from "react-router-dom";
export default function NavMenu(){
    return(
        <div className="menuBg">
            <div className="container">
                <div className="menu">
                    <h1><Link to="/" >Pizzaria </Link> </h1>
                    <h1><Link to="/pedidos" >Pedido</Link></h1>
                </div>
            </div>
        </div>
    )
}