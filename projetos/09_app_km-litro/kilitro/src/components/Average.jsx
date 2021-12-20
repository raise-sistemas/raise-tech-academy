import { Link } from 'react-router-dom';

export default function Average(){

    let list = [];
    if (localStorage.hasOwnProperty("list")) {
        list = JSON.parse(localStorage.getItem("list"))
    }
    list.push()
    const numbers = list.map((data) => {
        return{
            soma: data.name
        }
    });
        
    console.log(numbers);
    let total = numbers.reduce((total, data) => total + data.soma, 0); 
    let media = total/numbers.length;

    return(
        <div class="container md-lg-8">
            <div class="title-average">
                <h2> A média geral da autonomia é</h2>
                <h1>{media.toFixed(1)} km/litro</h1>
            </div>
            <Link class="link-form back-average" to={{ pathname: '/' }}>Voltar a página inicial</Link>
        </div>
    )
}