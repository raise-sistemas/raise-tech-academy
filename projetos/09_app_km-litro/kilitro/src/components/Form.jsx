import { useState, useEffect } from 'react';

export default function Form () {

    const [km, setKm] = useState();
    const [liter, setLiter] = useState();
    const [newKm, setNewKm] = useState();
    // const [autonomy, setAutonomy] = useState();

    function Autonomy(e) {
        e.preventDefault();
        window.location.reload(false);

        // setAutonomy((newKm-km)/liter)
        let autonomy = (newKm-km)/liter
        alert(" \n \nA autonomia é " + autonomy.toFixed(1) +"km/litro")

        // useEffect(() => {
            localStorage.setItem('autonomy', autonomy);
            let list = [];
            if (localStorage.hasOwnProperty("list")) {
                list = JSON.parse(localStorage.getItem("list"))
            }
            list.push({name: autonomy})
            localStorage.setItem("list", JSON.stringify(list));
        // }, [autonomy]);
    }

    // function Clear() {
    //     document.getElementById("km").value=""
    //     document.getElementById("newKm").value=""
    //     document.getElementById("liter").value=""
    // }

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
                <button id="autonomy" class="btn form" type="submit" disabled={!km || !newKm || !liter}>Descobrir Autonomia</button>
            </form>
            <div class="result">
                {/* <h3> A autonomia é: {autonomy}</h3> */}
            </div>
            {/* <button class="btn form clear" onClick={Clear}> Limpar </button> */}
        </div>
    )
}