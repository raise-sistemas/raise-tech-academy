import React, { useEffect, useState } from "react";
import sortearNomes from "../actions/sortearNomes";

export default function Finalizar() {
    let data = "";
    let newData = [];
    const [bool, setBool] = useState(false);
    // let teste = 0;
    
    function consultar(bool){
        setBool(bool);
    }
    
    
    
    useEffect(()=> {
        if(bool){
            data = localStorage.getItem("nomes");
            if(data){
                data = data.split(",");
                newData = sortearNomes(data);
                localStorage.setItem("nomes", data);
            }
        }
        setBool(false);
    }, [consultar])

    return (
        <div>
            <div>
                <button className="botao-finalizar" onClick={ ()=> {consultar(true)}}>
                Sortear
                </button>
            </div>

      </div>
    )

}
