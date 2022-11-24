/**
 * Calculo para saber se deve votar ou nao
 */

//importar os pacotes
const read = require('readline-sync')

//variáveis
let idade = Number(read.question("Digite sua idade:  ").replace(",","."))

//processamento e saida
if (idade < 16) {
    console.log("Proibido votar")
} else if (idade > 17 && idade < 71) {
        console.log("Voto Obrigatorio")
    }
    else {
        console.log("Voto Facultativo")
    }


