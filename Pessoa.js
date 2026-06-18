class Pessoa {
    _nome;
    _tipo;
    _cpf;

    constructor(nome, cpf, tipo){
        this._nome = nome;
        this._cpf = cpf;
        this._tipo = tipo;
    }

    exibirPessoa() {
        console.log(`Nome: ${this._nome}, Idade: ${this._cpf}, Tipo: ${this._tipo}`);
    }

}
const pessoa = new Pessoa("Eduardo", 21, "Braziliano", "Brasileiro");
pessoa.exibirPessoa();
module.exports = Pessoa;