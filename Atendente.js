const Pessoa = require('./Pessoa');

class Atendente extends Pessoa {
    constructor(nome, cpf, matricula) {
        super(nome, cpf);
        this.matricula = matricula;
        this.historico = [];
    }

    atender(cliente) {
        console.log(`Atendente ${this.nome} atendendo cliente ${cliente.nome}`)
        historico.push(cliente)
    }

    relatorio() {
        console.log(`RELATÓRIO DE ATENDIMENTO DO ATENDENTE ${this.nome}`)
        console.log(`Total de atendimentos ${this.historico.length}\n`)
        if (this.historico.length > 0) {
            historico.forEach(cliente, index => {
                console.log(`Atendimento ${index + 1} \t ${cliente.tipo} \t ${cliente.nome})`);
            });
        } else {
            console.log(`Nenhum atendimento registrado.`)
        }
    }
}

module.exports = Atendente;