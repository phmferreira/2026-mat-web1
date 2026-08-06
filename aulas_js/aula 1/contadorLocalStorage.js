if(!localStorage.getItem('contador')) {
    localStorage.setItem('contador', 0);
}

function incrementar() {
    let contador = localStorage.getItem('contador');
    contador = parseInt(contador) + 1;
    document.querySelector('#contador')
        .innerHTML = contador;
    localStorage.setItem('contador', contador);
}

function inicializacao() {
    let contador = localStorage.getItem('contador');
    document.querySelector('#contador')
        .innerHTML = contador;
    document
        .querySelector('button')
        .onclick = incrementar;
}

document
    .addEventListener(
        'DOMContentLoaded',
        inicializacao
    );