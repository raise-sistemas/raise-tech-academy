import React from "react";
import { useState } from "react";
import Nomes from "./Nomes";

export default function Consultar() {

    const [nomes, setNomes]=useState("");

    function getItem(e){
        setNomes(localStorage.getItem("nomes"));
    }

    
    return (
        <div>
            
            <button className="btn-consultar"
                    onClick={(e)=> getItem(e)}>Consultar nomes cadastrados
                </button> 
            <Nomes data={nomes}/>
      </div>
    )

}