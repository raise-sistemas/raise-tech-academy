import React, { useState } from 'react';
import CadastroNaoRealizado from "./CadastroNaoRealizado";
import CadastroRealizado from "./CadastroRealizado";
import uuid from '../actions/uuid';

export default function Cadastrar(props) {
  const [titleInput, setTitleInput] = useState("");
  const [infoInput, setInfoInput] = useState("");
  const [resposta, setResposta] = useState("");
  

  const response = (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const info = event.target.elements.info.value;
    if(title !== "" && info !== ""){ 
        const data = localStorage.getItem('tags');
        localStorage.setItem(
            'tags',
            data
            ? data + ';' + JSON.stringify({ 'title': title, 'info': info, 'uuid': uuid()})
            : JSON.stringify({ 'title': title, 'info': info, 'uuid': uuid()})
        );
        setResposta(<CadastroRealizado/>);
        setTitleInput("");
        setInfoInput("");  
        return true;
    }
    setResposta(<CadastroNaoRealizado />);
    return false;
  };
  
  return (
    <main className='container'>
      <div className='container t20 '>
        <form className='container bg-roxo add' onSubmit={response}>
          <label>Título</label>
          <input type='text' name='title' id='title' onChange={(e) => {setTitleInput(e.target.value)}}  value={titleInput}/>
          <label>Informação</label>
          <input type='text' name='info' id='info' onChange={(e) => {setInfoInput(e.target.value)}}  value={infoInput} />
          <button type='submit'>Cadastrar</button>
        </form>
        <div>
          <h2>{resposta}</h2>
        </div>
        
      </div>
    </main>
  );
}
