const readline = require("readline/promises");
const { stdin, stdout} = require("process");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let numero = 10;
numero = "Dez";
console.log(numero);

let valor = 5 + "5";
console.log(valor);
console.log(typeof valor);

let x = 10;
let y = "20";
console.log(x + y)

let resultado = "100" - 50;
console.log(resultado);
console.log(typeof resultado);

verdade = true;
console.log(verdade);
console.log(typeof verdade); 

async function main() {
    
console.log("============================")
console.log("==== Cadastro de Pessoa ====")

let idade = await rl.question("Digite sua idade: ")

let nacionalidade = await rl.question("Digite sua nacionalidade: ")

let estado = await rl.question("Digite o estado em que mora: ")

rl.close();

console.log("Idade: " + idade);
console.log("Nacionalidade: " + nacionalidade);
console.log("Estado: " + estado);

}

main();