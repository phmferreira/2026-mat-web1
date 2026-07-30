// const, let, var
let contador = 0;

// aula 1
function incrementar() {
    contador += 1;
    document.querySelector('#contador')
        .innerHTML = contador;
}
// chamada da função - com ()
// passar uma função - sem ()

function colocarIncrementar() {
    document
        .querySelector('button')
        .onclick = incrementar;
}

document
    .addEventListener(
        'DOMContentLoaded',
        colocarIncrementar
    );
// aula 0
// function incrementar() {
//     // contador += 1;
//     contador = contador + 1;
//     alert(`O valor é ${contador}.`)
// }