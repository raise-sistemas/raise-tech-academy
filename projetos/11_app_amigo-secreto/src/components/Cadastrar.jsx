import React from "react";
import { useState } from "react";

export default function Cadastrar() {

    const [names, setNames] = useState([]);
    const [count, setCount] = useState(0);

    const [nome, setNome]=useState();

    const Cadastrar =(valor)=> {
        // console.log(valor);
        localStorage.setItem(`${count}`,valor);
        names.push(localStorage.getItem(`${count}`));
        console.log(names);
        setCount(count + 1);

    }

    const Consultar=(valor)=> {
        alert(localStorage.getItem(valor));
    }
    
    return (
        <div>

            <div className='nome-inicial'>
                <input className="nome-sorteio" type="text" value={nome} onChange={(e)=>setNome(e.target.value)} />
                <button className="btn-cadastrar"
                    onClick={()=>Cadastrar(nome)}>Cadastrar nome
                </button>
                <button className="btn-consultar"
                    onClick={()=>Consultar(nome)}>Consultar nomes
                </button>
            </div>

      </div>
    )
}