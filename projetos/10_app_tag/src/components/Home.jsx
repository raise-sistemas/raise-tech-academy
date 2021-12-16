import React from 'react';

export default function Home(props) {
  //FIXME Evitar utilizar if() no jsx, e utilizar operador ternário
  //https://pt-br.reactjs.org/docs/conditional-rendering.html#inline-if-else-with-conditional-operator
  //{props.data ? <main/> : <div/>}
  if (props.data) {
    return (
      //FIXME Essa main pode virar um componente separado e ser importado aqui
      <main className='container'>
        {props.data.map((tag, index) => (
          <div
            key={index}
            className='bg-roxo card'
            onClick={() => {
              navigator.clipboard.writeText(tag.info);
            }}
          >
            <button className='w500'>X</button>
            <span>{tag.title}</span>
          </div>
        ))}
      </main>
    );
  }

  return (
    //FIXME Essa div pode virar um componente separado e ser importado aqui
    <div className='container t20 lh200'>
      <h2>
        Não há tags a serem mostradas aqui, <br />
        Cadastre uma nova tag
      </h2>
    </div>
  );
}
