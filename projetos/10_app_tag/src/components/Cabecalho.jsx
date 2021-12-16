import React from "react";
import {Link} from "react-router-dom";

export default function Cabecalho(props){

    return(

        <header className="p10">
            <nav className="container t20 ">
                <div>
                    <p>Tag App</p>
                </div>

                <div>
                    <ul>
                        <li><Link to={{pathname:"/"}}>Home</Link></li>
                        <li><Link to={{pathname:"/cadastrar"}}>Cadastrar</Link></li> 
                    </ul>
                </div>
            </nav>
            <div className="line"></div>
        </header>

    );

}