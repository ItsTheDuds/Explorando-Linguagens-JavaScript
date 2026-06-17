const readline = require("readline/promises");
const { stdin, stdout} = require("process");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function main() {

    let texto = await rl.question("Digite um texto: ");
    let textoInvertido = "";
    for(let i = texto.length - 1; i >= 0; i--) {
        // console.log(texto[i]);
        textoInvertido += texto[i];
    }
    textoInvertido = textoInvertido.toLowerCase();
    console.log(textoInvertido.charAt(0).toUpperCase() + textoInvertido.slice(1));
    
    rl.close();
}

main();