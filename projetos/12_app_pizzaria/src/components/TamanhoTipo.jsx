import React, { useEffect, useState } from "react";
import massas from "../utils/massas";
import tamanhos from "../utils/tamanhos";

export default function TamanhoTipo(){
    
    const [tamanho, setTamanho] = useState("");
    const [massa, setMassa] = useState("");

    function verMudanca(event , name, set){
       if(event){
           set(name)
       }
    }

    useEffect(()=>{
        localStorage.setItem("step1", [tamanho, massa]);
    }, [massa, tamanho])

    return(
        <div className="tamanhoMassas">
            <div className="tamanho">
                <h1>Escolha o tamanho</h1>
                <form>
                    {tamanhos.map((element)=>(
                    <div key={element}>
                        <input type="checkbox" name={element} onChange={(event)=> {verMudanca(event.target.checked, event.target.name, setTamanho)}} checked={tamanho === element ? true : false} />
                        <label>{element}</label>
                    </div>
                    ))}
                </form>
            </div>
            <div className="massa">
                <h1>Escolha o tipo de massa</h1>
                <form>
                {massas.map((element)=>(
                        <div key={element}>
                            <input type="checkbox" name={element} onChange={(event)=> {verMudanca(event.target.checked , event.target.name, setMassa)}} checked={massa === element ? true: false}/>
                        <label>{element}</label>
                    </div>
                    ))}
                </form>
            </div>
        </div>
    )
}