import React, {useEffect, useState} from "react";
import NaoTemTags from "./NaoTemTags";
import { background } from "../utils/backgrounds";
import removeTag from "../actions/removeTag";

export default function Main(props){ 
    const [tags, setTags] = useState([]);
    const [remove, setRemove] = useState(0);

    let data = localStorage.getItem('tags');
    if (data) {
        data = JSON.parse(data);
    }

    useEffect(()=>{
        if(data && data.length >= 1){
            setTags([...data])
        }else{
            setTags([data])
        }
    
    }, [remove])

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
                    <div className="result">
                        <button className='w500'onClick={() => {setRemove(removeTag(param.uuid))}}>X</button>
                        <span>{param.title}</span>
                    </div>
                </div>
                )): <NaoTemTags />}
            </main>

        )  
    
}