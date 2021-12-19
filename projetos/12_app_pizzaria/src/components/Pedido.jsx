import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import ImagePizza from "./ImagePizza";
import TamanhoTipo from "./TamanhoTipo";
import Ingredientes from "./Ingredientes";
import Finalizacao from "./Finalizacao";
import ConfirmacaoPedido from "./ConfirmacaoPedido";

let sabor = "";
export function nomePizza(nome){
    sabor = nome;
    localStorage.setItem("sabor", nome);
    return true;
} 


export default function Pedido(){
    const [escolha, setEscolha] = useState(0);
    useEffect(() => {
        if (escolha < -1){setEscolha(0);}
        if(escolha > 3){setEscolha(2);}
    }, [escolha])
    return(
        <div className="pedido container">
            <h2> {sabor} </h2>
            <ProgressBar escolha={escolha} />
            <ImagePizza/>
            {escolha === 0 ? <TamanhoTipo/> : null}
            {escolha === 1 ? <Ingredientes/> : null}
            {escolha === 2 ? <Finalizacao nome={sabor} /> : null}
            {escolha === 3 ? <ConfirmacaoPedido/> : null}          
            <div className="opcoes">
                {escolha >= 1 && escolha <= 2 ? <button onClick={()=>{setEscolha(escolha - 1)}}>Voltar</button> : null} 
                {escolha <= 2 ? <button onClick={()=>{setEscolha(escolha + 1)}}>{escolha > 1 ? "Finalizar": "Avançar"}</button> : null}               
            </div>
            

        </div>
    )
}