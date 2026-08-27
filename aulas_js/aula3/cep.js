document
    .addEventListener(
        "DOMContentLoaded",
        function () {
            document
                .querySelector('form')
                .onsubmit = function () {
                    const cep = document.querySelector('#cep').value;
                    fetch(`https://viacep.com.br/ws/${cep}/json/`)
                        .then((response) => response.json())
                        .then((dataJson) => {
                            console.log(dataJson);
                        });
                }
});
















// const aluno1 = {
//     nome: "João",
//     idade: 20,
//     disciplinas: ["Matemática", "Física", "Química"],
//     endereco: {
//         rua: "Rua A",
//         numero: 123
//     },
//     apresentar: function() {
//         console.log(`Olá, meu nome é ${this.nome}.`);
//     }
// }