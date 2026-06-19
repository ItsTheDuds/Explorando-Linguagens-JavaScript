const Atendente = require("./Atendente");
const Cliente = require("./Cliente")
const Fila = require("./Fila")

const atendente = new Atendente("Fulano", "123.456.789-00", "AT001");
const fila = new Fila();

const clientes = [
    new Cliente('Luva de Pedreiro', '244.554.334-10', Cliente.TipoCliente.COMUM),
    new Cliente('Marina Silva', '244.424.334-10', Cliente.TipoCliente.PRIORITARIO),
    new Cliente('João de Deus', '435.554.334-10', Cliente.TipoCliente.COMUM),
    new Cliente('Speed', '886.554.334-10', Cliente.TipoCliente.PRIORITARIO),
    new Cliente('PEWDIEPIE', '564.554.334-10', Cliente.TipoCliente.COMUM),
    new Cliente('Gato Galático', '443.554.434-10', Cliente.TipoCliente.COMUM),
    new Cliente('Viniccius13', '334.554.334-10', Cliente.TipoCliente.COMUM),
    new Cliente('Napoleão Bon de Party', '710.554.334-10', Cliente.TipoCliente.PRIORITARIO),
];

clientes.forEach(cliente => {
    cliente.senha = Cliente.gerarSenha(cliente.tipo);
    fila.entrar(cliente);
})

fila.exibirFila();

console.log("\nChamando clientes para atendimento...")

let proximoCliente = fila.chamarProximo();
while(proximoCliente) {
    atendente.atender(proximoCliente);
    proximoCliente = fila.chamarProximo();
}

atendente.relatorio();
