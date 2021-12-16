// import Autonomy from "./autonomy.js"
import { useState } from 'react';

//FIXME Um bom padrão é utilizar nome dos arquivos que são componentes com letra maiúscula, e com nomes iguais ao da função.
//no caso, Form.js.
//
//
//
//
//
//

function Form() {
  function Autonomy(e) {
    e.preventDefault();
    console.log(km);
    console.log(liter);
    console.log(newKm);
    const autonomy = (newKm - km) / liter;
    console.log(autonomy.toFixed(1));
    const a = localStorage.setItem('autonomy', autonomy);

    //var valorRecuperado = Number(localStorage.getItem(chave))
  }

  const [km, setKm] = useState();
  const [liter, setLiter] = useState();
  const [newKm, setNewKm] = useState();

  //FIXME No form aqui você pode adicionar labels aos inputs, pra melhorar para o usuário. Deixei um exemplo.

  return (
    <div>
      <form onSubmit={Autonomy}>
        <label htmlFor='km'>Quilometragem</label>
        <input
          name='km'
          id='km'
          type='number'
          placeholder='Insira a quilometragem atual'
          onChange={(e) => setKm(e.target.value)}
        />
        {/* <input id="price" type='number' placeholder='Insira o preço da gasolina'/> */}
        <input
          id='newKm'
          type='number'
          placeholder='Insira a quilometragem após'
          onChange={(e) => setNewKm(e.target.value)}
        />
        <input
          id='liter'
          type='number'
          placeholder='Insira a quantidade de litros abastecido'
          onChange={(e) => setLiter(e.target.value)}
        />
        <button id='autonomy' type='submit'>
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Form;
