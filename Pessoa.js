class Pessoa {
    _nome;
    _idade;
    _raca;
    _nacionalidade;

    constructor(nome, idade, raca, nacionalidade){
        this._nome = nome;
        this._idade = idade;
        this._raca = raca;
        this._nacionalidade = nacionalidade;
    }

    exibirPessoa() {
        console.log(`Nome: ${this._nome}, Idade: ${this._idade}, Raça: ${this._raca}, Nacionalidade: ${this._nacionalidade}`);
    }

}
const pessoa = new Pessoa("Eduardo", 21, "Braziliano", "Brasileiro");
pessoa.exibirPessoa();
module.exports = Pessoa;