import React, { useState } from "react";
import Cadastrar from "./Cadastrar";
import Consultar from "./Consultar";
import RevelarNome from "./RevelarNome";
import Sortear from "./Sortear";

export default function Home(props) {

    const [escolha, setEscolha] = useState(0);

    return (    
        <div>
            <h1>AMIGO SECRETO</h1>
            <div>
                <button className='inserir' onClick={() => setEscolha(1)}>
                Inserir o nome dos participantes
                </button>
            </div>

            <div>
                <button className='revelar' onClick={ ()=> setEscolha(2)}>
                Revelar nome sorteado
                </button>
            </div>
            
            {escolha === 1 ? <div> <Cadastrar /> <Consultar /> <Sortear /> </div> : null}
            {escolha === 2 ? <div> <RevelarNome /> </div> : null}

        </div>
    );
}