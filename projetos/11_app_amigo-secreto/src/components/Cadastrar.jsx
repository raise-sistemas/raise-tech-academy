import React, { useEffect } from "react";
import { useState } from "react";

export default function Cadastrar() {
    const [nomes, setNomes] = useState("")
    const [nome, setNome]=useState("");
    let data = [];
    const Cadastrar =(valor)=> {
        setNomes(valor)
        setNome("");

    }
    
    useEffect(()=>{
        if(nomes){
            data = localStorage.getItem("nomes");
            if(data){
                localStorage.setItem("nomes", [data, nomes]);
            }else{
                localStorage.setItem("nomes", [nomes]);
            }
        }
        
    }, [nomes])


    return (
        <div>

            <form className='nome-inicial' onClick={(e)=> e.preventDefault() }>
                <input className="nome-sorteio" type="text" value={nome} onChange={(e)=>setNome(e.target.value)} />
                
                <button className="btn-cadastrar"
                    onClick={()=>Cadastrar(nome)}>Cadastrar nome
                </button>

            </form>

      </div>
    )
}