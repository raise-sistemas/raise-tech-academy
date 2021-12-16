export default function createTag(event){
    event.preventDefault();
    let title = event.target.elements.title.value;
    let info = event.target.elements.info.value;
    if (title !== '' && info !== ''){
        document.getElementById("response").innerHTML = "<h2>Cadastrado com Sucesso</h2>";
        const data = localStorage.getItem("tags");
        localStorage.setItem("tags",data ? data +";"+JSON.stringify({"title": title, "info": info})
        : JSON.stringify({"title": title, "info": info}));

    }
    else{
        document.getElementById("response").innerHTML = "<h2>Verifique se preencheu os 2 campos</h2";
    }
    
}

