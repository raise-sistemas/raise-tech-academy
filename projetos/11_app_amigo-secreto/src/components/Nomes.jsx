import React, { useEffect, useState } from "react";

export default function Nomes(props){
    const [cadastrados , setCadastrados] = useState([]);
    useEffect(()=>{
        if (props.data) {
            setCadastrados(props.data.split(","));
        }
    }, [props])
    
    return(
        <div>
            <dl>
                {cadastrados ?
                cadastrados.map( (element, index)=> (
                    <dt key={element + "-" + index}>{element}</dt>
                ))
                : null}
            
            </dl>
        </div>
    )
    
}