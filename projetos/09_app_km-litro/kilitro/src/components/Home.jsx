import kilitro from './images/kilitro.png'
import { Link } from 'react-router-dom';

export default function Home(){
    return(
            <div class="container md-lg-8">
                <div class="title-">
                    <h1>Kilitro</h1>
                </div>
                    <h3>O calculador de autonomia do seu carro</h3>
                    <div>
                        <Link class="link btn" to={{ pathname: '/form' }}> Calcular Nova Autonomia </Link>
                    </div>
                    <div>
                        <Link class="link btn" to={{ pathname: '/average' }}> Ver Média Geral de Autonomia </Link>
                    </div>                
                <div class= "vector">
                    <img class= "img" src={kilitro}/>
                </div>
            </div>
    )
}