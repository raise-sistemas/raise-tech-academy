import { useState } from 'react';
// import Form from "./formulario.js";
// import Autonomy from "./autonomy.js";
import kilitro from "./images/kilitro.png"

    function Consts () {

        const [km, setKm] = useState();
        const [liter, setLiter] = useState();
        const [newKm, setNewKm] = useState();

        function Autonomy(e) {
            e.preventDefault();
            window.location.reload(false);
            if (km != '' || newKm != '' || liter != '') {
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
                <div class="container md-lg-8">
                    <div class="title"> 
                    <h1>Kilitro</h1>
                    </div>
                    <h3>O calculador de autonomia do seu carro</h3>
                    <div class = "justify-content-center">
                    </div>
                    <form onSubmit={Autonomy}>
                        <div>
                            <input id ="km" type='number' placeholder='Insira a quilometragem antiga...' onChange={(e) => setKm(e.target.value)}/>
                        </div>
                        {/* <input id="price" type='number' placeholder='Insira o preço da gasolina'/> */}
                        <div>
                            <input id="newKm" type='number' placeholder='Insira a quilometragem atual...' onChange={(e) => setNewKm(e.target.value)}/>
                        </div>
                        <div>
                            <input id="liter" type='number' placeholder='Insira a quantidade de litros abastecido...' onChange={(e) => setLiter(e.target.value)}/>
                        </div>
                        <button id="autonomy" class="btn btn-form" type="submit">Adicionar Nova Autonomia</button>
                    </form> 
                    {/* <div>
                        <button id="media" class="btn btn-form" type="submit">Ver Média Geral de Autonomia</button>
                    </div> */}
                    <div class= "vector">
                        <img class= "img" src={kilitro}/>
                    </div>
                </div>      
            </div>
        )
    }

    export default Consts;
