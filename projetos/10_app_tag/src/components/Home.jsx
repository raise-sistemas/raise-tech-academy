import React from "react";


export default function Home(props){

    

    if (props.data){

        return(

            <main className="container">
                {props.data.map((tag, index) =>          
                    <div key={index} className="bg-roxo card" onClick={() => {navigator.clipboard.writeText(tag.info)}}>
                        <button className="w500">X</button>
                        <span>{tag.title}</span>
                    </div>
                )}
            </main>
        )


    }

    return (
        <div className="container t20 lh200">
            <h2>Não há tags a serem mostradas aqui, <br />Cadastre uma nova tag</h2>
        </div>
    );
}