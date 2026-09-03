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