import React, {useEffect, useState} from "react";

export default function Main(props){ 
    const [tags, setTags] = useState([]);
    const data = props.data;
    useEffect(()=>{
        console.log("to dentro do useEffect");
        console.log(tags);
        setTags([...data]);

        return (
               
            // <main className='container'>
            //     {console.log("To dentro da main", tags)}
            //     {data.map((param, index) => (
            //     <div
            //         key={param+"-"+index}
            //         className='bg-roxo card'
            //         onClick={() => {
            //         navigator.clipboard.writeText(tags[0].info);
            //         }}
            //     >
        
            //         <button className='w500'>X</button>
            //         <span>{tags[0].title}</span>
            //     </div>
            //     ))}
            // </main>
            
            <div>oi</div>
            
        )     
    }, [data])
        return (

            <main className='container'>
                {console.log("To dentro da main", tags)}
                {data.map((param, index) => (
                <div
                    key={param+"-"+index}
                    className='bg-roxo card'
                    onClick={() => {
                    navigator.clipboard.writeText(param.info);
                    }}
                >
        
                    <button className='w500'>X</button>
                    <span>{param.title}</span>
                </div>
                ))}
            </main>

        )  
    
}