import react from "react";

export default function Embaralhar () {

    const [draw, setDraw] = useState("");

    // Função para randomizar names
function Embaralhar(draw) {
    // Loop em todos os elementos
for (let i = draw.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
    const j = Math.floor(Math.random() * (i + 1));
    // Reposicionando elemento
    [draw[i], draw[j]] = [draw[j], draw[i]];
}
// Retornando names com aleatoriedade
return draw;
}

var names = [names];

console.log(Embaralhar(names));
console.log(Embaralhar(names));
console.log(Embaralhar(names));

}