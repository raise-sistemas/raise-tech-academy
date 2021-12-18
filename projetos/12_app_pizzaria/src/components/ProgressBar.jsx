import React from "react";

export default function ProgressBar(props){
    return(
        <ul id="progressBar">
            <li className={props.escolha >= 0 ? "liActive" : "liDisable"}>Tamanho e Massa</li>
            <div className={props.escolha >= 1 ? "line liActive" : "line liDisable"}></div>
            <li className={props.escolha >= 1 ? "liActive" : "liDisable"}>Ingredientes</li>
            <div className={props.escolha >= 2 ? "line liActive" : "line liDisable"}></div>
            <li className={props.escolha >= 2 ? "liActive" : "liDisable"}>Finalizar</li>
        </ul>
    )
}