// import { useState } from 'react';
// import Consts from "./consts.js";
// import Autonomy from "./autonomy.js";

// function Form() {

//     const [km, setKm] = useState();
//     const [liter, setLiter] = useState();
//     const [newKm, setNewKm] = useState();

//     <div>
//         <form onSubmit={Autonomy}>
//             <input id ="km" type='number' placeholder='Insira a quilometragem atual' onChange={(e) => setKm(e.target.value)}/>
//             {/* <input id="price" type='number' placeholder='Insira o preço da gasolina'/> */}
//             <input id="newKm" type='number' placeholder='Insira a quilometragem após' onChange={(e) => setNewKm(e.target.value)}/>
//             <input id="liter" type='number' placeholder='Insira a quantidade de litros abastecido' onChange={(e) => setLiter(e.target.value)}/>
//             <button id='autonomy' type="submit">Cadastrar</button>
//         </form>                
//     </div>
// }

// export default Form;