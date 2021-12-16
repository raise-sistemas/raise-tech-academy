import React from 'react';
import createTag from '../actions/createTag';

export default function Cadastrar(props) {
  return (
    <main className='container'>
      <div className='container t20 '>
        <form className='container bg-roxo add' onSubmit={createTag}>
          <label>Título</label>
          <input type='text' name='title' id='title' />
          <label>Informação</label>
          <input type='text' name='info' id='info' />
          <button type='submit'>Cadastrar</button>
        </form>
        <div id='response'></div>
      </div>
    </main>
  );
}
