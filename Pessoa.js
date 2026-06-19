class Pessoa {
    constructor(nome, cpf) {
        this.nome = nome; // Evite usar o "_" se não for criar getters/setters, deixa o código mais limpo
        this.cpf = cpf;
    }

    exibirPessoa() {
        console.log(`Nome: ${this.nome}, CPF: ${this.cpf}`);
    }

}
module.exports = Pessoa;