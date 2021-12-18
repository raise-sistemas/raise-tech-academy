import React, { useEffect, useState } from "react";
import ingredientes from "../utils/ingredientes";

export default function Ingredientes(){
    let filtered = [];
    function verMudanca(event , name, set){
        if(event){
            if(ingrediente){
                set([...ingrediente, name]); 
            }else{
                set([name]);
            }
        }else{
            
            set(ingrediente.filter((element) => element !== name));
            // set(filtered);
        }
        return event;
    }
    const [ingrediente,setIngrediente] = useState([]);


    useEffect(()=>{
        localStorage.setItem("step2", JSON.stringify(ingrediente));
    }, [verMudanca])

    

    return (
        <div className="ingredientes">
            <div className="adicionais ">
                <h1>Adicione ingredientes</h1>
                <form>
                    {ingredientes.map((element)=>(
                        <div key={element}>
                            <input type="checkbox" name={element} onChange={(event)=> {verMudanca(event.target.checked, event.target.name, setIngrediente)}}/>
                            <label >{element}</label>
                        </div>
                    ))}
                    <div className="observacoes">
                        <label for="observacao">Observações</label>
                        <input type="text" name="observacao" placeholder="Ex: Remover cebola"/>
                    </div>
                </form>
            </div>    
        </div>
    )
}