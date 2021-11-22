export function isBoardFull(){
    let count = 0;
    for(let i = 0; i < 9; i++){
        if(document.getElementById(`${i}`).innerHTML !== ""){
            count++;
        }
    }
    if (count === 9){
        let finished = document.getElementById("finished");
        finished.innerHTML += "<p>Nenhum jogador ganhou!</p>";
        finished.classList.remove("hidden");
        return true;
    }
    return false;
}