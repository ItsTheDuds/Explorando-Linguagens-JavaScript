const Cliente = require("./Cliente");

class Fila {
    constructor() {
        this.filaComum = [];
        this.filaPrioritaria = [];
    }

    entrar(cliente) {
        if (cliente.tipo === Cliente.TipoCliente.PRIORITARIO) {
            this.filaPrioritaria.push(cliente);
            console.log(`${cliente.nome} (Prioritário) entrou na fila.`);
        } else {
            this.filaComum.push(cliente);
            console.log(`${cliente.nome} (Comum) entrou na fila.`);
        }
    }

    exibirFila() {
        const filaCombinada = [...this.filaPrioritaria, ...this.filaComum];
        if (filaCombinada.length === 0) {
            console.log("Nenhum cliente aguardando na fila.")
        }
        console.log("\n--- Clientes Aguardando ---");

        filaCombinada.forEach((cliente, index) => {
            console.log(`${index + 1}º | Senha: ${cliente.senha} | Nome: ${cliente.nome}`);
        });

        console.log("---------------------------\n");
    }

    chamarProximo() {
        if (this.filaPrioritaria.length > 0) {
            return this.filaPrioritaria.shift();
        } else if (this.filaComum.length > 0) {
            return this.filaComum.shift();
        } else {
            console.log("Nenhum cliente aguardando na fila.");
            return;
        }
    }
}

module.exports = Fila;