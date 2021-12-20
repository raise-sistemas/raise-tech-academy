import React, { useEffect, useState } from "react";
import ingredientes from "../utils/ingredientes";

export default function Ingredientes(){
    const [ingrediente,setIngrediente] = useState([]);
    const [observacao, setObservacao] = useState("");


    function verMudanca(event , name, set){
        if(event){
            if(ingrediente){
                set([...ingrediente, name]); 
            }else{
                set([name]);
            }
        }else{
            
            set(ingrediente.filter((element) => element !== name));
        }
        return event;
    }

    function verObservacao(event){
        setObservacao(event);
    }


    useEffect(()=>{
        localStorage.setItem("step2", JSON.stringify(ingrediente));
        localStorage.setItem("step2-obs", observacao);
    }, [verMudanca, verObservacao])

    

    return (
        <div className="ingredientes">
            <div>
                <h1>Adicione ingredientes</h1>
                <form>
                    {ingredientes.map((element)=>(
                        <div className="checkboxStyle" key={element}>
                            <input type="checkbox" name={element} onChange={(event)=> {verMudanca(event.target.checked, event.target.name, setIngrediente)}}/>
                            <label >{element}</label>
                        </div>
                    ))}
                    <div className="observacoes">
                        <label>Observações</label>
                        <input type="text" name="observacao" placeholder="Ex: Remover cebola" onChange={(event)=> {verObservacao(event.target.value)}}/>
                    </div>
                </form>
            </div>    
        </div>
    )
}