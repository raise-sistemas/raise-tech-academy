import React, {useState, useEffect} from "react";




export default function Finalizacao(){
    const [nome, setNome] = useState("");
    const [tamTipo, setTamTipo] = useState([]);
    const [adicionais, setAdicionais] = useState([]);
    const [observacao, setObservacao] = useState("");
    
    // setSabor(localStorage.getItem("sabor"))
    // setTamTipo(localStorage.getItem("step1"))
    // setAdicionais(localStorage.getItem("step2"))
    // setObservacao(localStorage.getItem("step2-obs"))
    
    
    useEffect(()=>{
        
        let sabor = localStorage.getItem("sabor");
        let tamanhoTipo = localStorage.getItem("step1");
        let add = localStorage.getItem("step2");
        let obs = localStorage.getItem("step2-obs");
        if(tamanhoTipo){ setTamTipo(tamanhoTipo.split(","))}
        if(add){setAdicionais(JSON.parse(add))}
        if(sabor){setNome(sabor)}
        if(obs){setObservacao(obs)} 

        console.log("oi")

    },[] )
    return(
        <div className="finalizacao">
            <div>
                <h1>Seu pedido: </h1>
                <p>Pizza de {nome} </p>
                <p>Tamanho: {tamTipo[0] ? tamTipo[0] : null } </p>
                <p>Tipo: {tamTipo[1] ? tamTipo[1] : null} </p>
                <p>Adicionais: {adicionais ? adicionais.map((element) => element + " " ) : null}</p>
                <p>observação: {observacao} </p>
            </div>
        </div>
    )
}