// import Autonomy from "./autonomy.js"
import { useState } from 'react'

function Form () {

    function Autonomy(e) {
        e.preventDefault();
        console.log(km);
        console.log(liter);
        console.log(newKm);
        const autonomy = (newKm-km)/liter;
        console.log(autonomy.toFixed(1));
        const a = localStorage.setItem('autonomy', autonomy);

        //var valorRecuperado = Number(localStorage.getItem(chave))
    }
    
    const [km, setKm] = useState();
    const [liter, setLiter] = useState();
    const [newKm, setNewKm] = useState();

    return (
        <div>
            <form onSubmit={Autonomy}>
                <input id ="km" type='number' placeholder='Insira a quilometragem atual' onChange={(e) => setKm(e.target.value)}/>
                {/* <input id="price" type='number' placeholder='Insira o preço da gasolina'/> */}
                <input id="newKm" type='number' placeholder='Insira a quilometragem após' onChange={(e) => setNewKm(e.target.value)}/>
                <input id="liter" type='number' placeholder='Insira a quantidade de litros abastecido' onChange={(e) => setLiter(e.target.value)}/>
                <button id='autonomy' type="submit">Cadastrar</button>
            </form>
            
        </div>      
    )
}

export default Form;