import { useState } from 'react';

export default function Form () {

    const [km, setKm] = useState();
    const [liter, setLiter] = useState();
    const [newKm, setNewKm] = useState();

    function Autonomy(e) {
        e.preventDefault();
        window.location.reload(false);

        const autonomy = (newKm-km)/liter;
        alert("A autonomia é " + autonomy.toFixed(1));
        localStorage.setItem('autonomy', autonomy);

        let list = [];
        if (localStorage.hasOwnProperty("list")) {
            list = JSON.parse(localStorage.getItem("list"))
        }
        list.push({name: autonomy})
        localStorage.setItem("list", JSON.stringify(list));
 
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
                <button id="autonomy" class="btn btn-form form" type="submit" disabled={!km || !newKm || !liter}>Descobrir Autonomia</button>
            </form>
        </div>

    )
}