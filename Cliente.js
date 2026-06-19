const Pessoa = require('./Pessoa');

class Cliente extends Pessoa {
    static contadorComum = 0;
    static contadorPrioritario = 0;

    static TipoCliente = Object.freeze({
        COMUM: 'comum',
        PRIORITARIO: 'prioritario'
    });

    constructor(nome, cpf, tipo) {
        super(nome, cpf);
        this.tipo = tipo;
        this.senha = Cliente.gerarSenha(tipo); 
    }

    static gerarSenha(tipo) {
        if (tipo === Cliente.TipoCliente.PRIORITARIO) {
            Cliente.contadorPrioritario++;
            return `P${Cliente.contadorPrioritario.toString().padStart(3, '0')}`;
        }
        Cliente.contadorComum++;
        return `C${Cliente.contadorComum.toString().padStart(3, '0')}`;
    }
}
module.exports = Cliente;