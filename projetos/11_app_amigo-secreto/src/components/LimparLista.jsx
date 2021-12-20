import react from "react";

export default function LimparLista () {

    function limpar () {
        localStorage.removeItem("nomes");
    }

    return (
        <div>
            <button className="btn-limpar" onClick={limpar}>Limpar lista</button>
        </div>
        
    )
}

