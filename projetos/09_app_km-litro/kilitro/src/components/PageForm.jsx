import Form from './Form'
import { Link } from 'react-router-dom';

export default function PageForm() {
    return(
            <div class="container md-lg-8">
                <div class="title">
                    <h2>Informe os dados do último abastecimento</h2>
                </div>
                <Form/>
                <Link class="link-form" to={{ pathname: '/' }}>Voltar a página inicial</Link>
            </div>
    )
}