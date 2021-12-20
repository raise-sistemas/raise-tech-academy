import React, { useEffect, useState } from "react";

export default function RevelarNome(){
    const [count , setCount] = useState(0);
    const [nome, setNome] = useState("");
    let local = -1;
    let data = "";
    const [nomeRevelado, setNomeRevelado] = useState("");
    function consultar(){
        setCount(count + 1);
        setNomeRevelado(data[local]);
    }
    
    useEffect( ()=>{
        data = localStorage.getItem("nomes");
        if(data){
            data = data.split(",");
            data.forEach( (element , index) => {
                if (element === nome){
                    if (index + 1 === data.length){
                        local = 0;
                    }else{
                        local = index + 1;
                    }
                }
            } )
            
        }
  
    }, [consultar] )

    return (
        <div>
            <div className='nome-inicial'>
                <input className="nome-sorteio" type="text" value={nome} onChange={(e)=> {setNome(e.target.value)}} />
                
                <button className="btn-cadastrar"
                    onClick={()=>consultar(nome)}>Revelar
                </button>
            </div>

            <div className="nome-revelado">{
                    nomeRevelado 
                    ? 
                    <p>O seu amigo oculto é: <span >{nomeRevelado}</span></p>
                    :
                    null
                }
            </div>

      </div>
    )
}