// import Consts from "./consts.js";
// import Forms from "./formulario.js";

// function Autonomy(e) {
//     e.preventDefault();
//     const autonomy = (newKm-km)/liter;
//     console.log(autonomy.toFixed(1));

//     localStorage.setItem('autonomy', autonomy);
//     let list = [];
//     if (localStorage.hasOwnProperty("list")) {
//         list = JSON.parse(localStorage.getItem("list"))
//     }
//     list.push({name: autonomy})
//     localStorage.setItem("list", JSON.stringify(list));
    
//     const numbers = list.map((data) => {
//         return{
//             soma: data.name
//         }
//     });

//     console.log(numbers);
    
//     let total = numbers.reduce((total, data) => total + data.soma, 0); 
        
//     let media = total/numbers.length;
//     console.log(media);
// }

// export default Autonomy;