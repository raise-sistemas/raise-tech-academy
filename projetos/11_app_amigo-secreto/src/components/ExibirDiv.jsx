import React from "react";

export default function ExibirDiv() {

    function ExibirDiv(el) {
        var display = document.getElementById('nome-inicial').style.display;
        if(display == "none")
            document.getElementById('nome-inicial').style.display = 'block';
        else
            document.getElementById('nome-inicial').style.display = 'none';
    }
};