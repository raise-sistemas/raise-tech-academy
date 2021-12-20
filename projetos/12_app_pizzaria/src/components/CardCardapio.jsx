import pizza1 from "../utils/pizza1.jpg";
import {Link} from "react-router-dom";
import saboresPizzas from "../utils/saboresPizzas";
import { nomePizza } from "./Pedido";

export default function CardCardapio(){
    return(
        <div className="cardsPizzas">
            {saboresPizzas.map((element)=> (
                
                <div className="pizza" key={element}>
                    <div className="infoPizza">
                        <img src={pizza1} alt="pizza 1"/>
                        <h1>{element}</h1>
                    </div>
                    <button onClick={() => {nomePizza(element)}} ><Link to="/pedido">Selecionar</Link></button>
                </div>

            ))}


        </div>
    )
}