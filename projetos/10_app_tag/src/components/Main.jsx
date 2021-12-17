import React, {useEffect, useState} from "react";
import NaoTemTags from "./NaoTemTags";
import { background } from "../utils/backgrounds";
import removeTag from "../actions/removeTag";

export default function Main(props){ 
    const [tags, setTags] = useState([]);
    const [remove, setRemove] = useState(false);

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
    let bgIndex = 0;
    return (

            <main className='container'>
                {data ? tags.map((param, index) => (
                <div
                    key={param+"-"+index}
                    className={background[bgIndex++] + " "+ "card"}
                    onClick={() => {
                    navigator.clipboard.writeText(param.info);
                    }}
                >   
                    <div className="d-none">
                        {bgIndex >= 4 ? bgIndex = 0 : bgIndex}
                    </div>
                    <button className='w500'onClick={() => {setRemove(removeTag(param.uuid))}}>X</button>
                    <span>{param.title}</span>
                </div>
                )): <NaoTemTags />}
            </main>

        )  
    
}