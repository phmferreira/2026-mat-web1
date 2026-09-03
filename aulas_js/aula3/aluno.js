const aluno1 = {
    nome: "João",
    idade: 20,
    disciplinas: ["Matemática", "Física", "Química"],
    endereco: {
        rua: "Rua A",
        numero: 123
    },
    apresentar: function() {
        console.log(`Olá, meu nome é ${this.nome}.`);
    }
}

// acessando
let nome = aluno1.nome;
// ou 
nome = aluno1['nome'];