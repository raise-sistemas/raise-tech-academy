import { useState } from 'react';

export default function Form () {

    const [km, setKm] = useState();
    const [liter, setLiter] = useState();
    const [newKm, setNewKm] = useState();

    function Autonomy(e) {
        e.preventDefault();
        window.location.reload(false);
        if (km !== '' || newKm !== '' || liter !== '') {
            const autonomy = (newKm-km)/liter;
            alert("A autonomia é " + autonomy.toFixed(1));
            localStorage.setItem('autonomy', autonomy);
            let list = [];
            if (localStorage.hasOwnProperty("list")) {
                list = JSON.parse(localStorage.getItem("list"))
            }
            list.push({name: autonomy})
            localStorage.setItem("list", JSON.stringify(list));
            const numbers = list.map((data) => {
                return{
                    soma: data.name
                }
            });

            console.log(numbers);
            let total = numbers.reduce((total, data) => total + data.soma, 0); 
            let media = total/numbers.length;

            alert("A média geral da autonomia é " + media.toFixed(1));

        } else {
            alert("Verifique se todos os campos foram preenchidos.")
        }
    }

    return (
        <div>
            <form onSubmit={Autonomy}>
                <div>
                    <input id ="km" type='number' placeholder='Insira a quilometragem antiga...' onChange={(e) => setKm(e.target.value)}/>
                 </div>
                <div>
                    <input id="newKm" type='number' placeholder='Insira a quilometragem atual...' onChange={(e) => setNewKm(e.target.value)}/>
                 </div>
                <div>
                    <input id="liter" type='number' placeholder='Insira a quantidade de litros abastecido...' onChange={(e) => setLiter(e.target.value)}/>
                </div>
                <button id="autonomy" class="btn btn-form form" type="submit">Descobrir Autonomia</button>
            </form>
        </div>
    )
}