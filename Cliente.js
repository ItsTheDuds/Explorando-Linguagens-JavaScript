const Pessoa = require('./Pessoa');

class Cliente extends Pessoa {
    constructor(nome, idade, nacionalidade) {
        super(nome, idade);
    }

    senha(id, prioridade) {
        if (prioridade === "ALTA") {
            for (let i = 1; i <= 3; i++) {
                let codigo = "A" + i.toString().padStart(3, '0');
                console.log(`Prioridade(${prioridade}) Senha(${codigo})`);
            }
        } else if (prioridade === "BAIXA") {
            for (let i = 1; i <= 3; i++) {
                let codigo = "P" + i.toString().padStart(3, '0');
                console.log(`Prioridade(${prioridade}) Senha(${codigo})`);
            }
        }
    }
}

const cliente = new Cliente("Eduardo", 21, "RobertoBollaños");
cliente.senha(1, "ALTA");