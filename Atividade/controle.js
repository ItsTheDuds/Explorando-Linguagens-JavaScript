const readline = require("readline/promises");
const { stdin, stdout} = require("process");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function main() {

    let primeiro = await rl.question("Digite primeiro numero: ");
    let segundo = await rl.question("Digite segundo numero: ");
    let terceiro = await rl.question("Digite terceiro numero: ");

    primeiro = Number(primeiro);
    segundo = Number(segundo);
    terceiro = Number(terceiro);

    console.log("Os números são " + primeiro + " " + segundo + " " + terceiro)
    console.log(typeof primeiro);

    if (primeiro > segundo && primeiro > terceiro) {
        console.log("O maior número é " + primeiro);
    } else if (segundo > primeiro && segundo > terceiro) {
        console.log("O maior número é " + segundo);
    } else {
        console.log("O maior número é " + terceiro);
    }
rl.close();
}

main();