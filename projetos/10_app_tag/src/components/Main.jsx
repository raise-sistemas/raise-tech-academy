import React, {useEffect, useState} from "react";
import NaoTemTags from "./NaoTemTags";

export default function Main(props){ 
    const [tags, setTags] = useState([]);
    
    let data = localStorage.getItem('tags');
    if (data) {
        data = data.split(';');
        data.forEach((tag, index) => {
            data[index] = JSON.parse(tag);
        });
    }

    useEffect(()=>{
        if(data){

            setTags([...data])
        }
    
    }, [])

    return (

            <main className='container'>
                {data ? tags.map((param, index) => (
                <div
                    key={param+"-"+index}
                    className='bg-roxo card'
                    onClick={() => {
                    navigator.clipboard.writeText(param.info);
                    }}
                >
                    {console.log("TO NO IF")}
                    <button className='w500'>X</button>
                    <span>{param.title}</span>
                </div>
                )): <NaoTemTags />}
            </main>

        )  
    
}