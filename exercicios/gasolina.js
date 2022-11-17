/**
 * Cálculo para saber qual Combustível compensa mais
 */

//importar os pacotes
const read = require('readline-sync')

//variáveis
let etanol = Number(read.question("Digite qual o valor do Etanol: ").replace(",","."))
let gasolina = Number(read.question("Digite qual o valor da Gasolina: ").replace(",","."))

//processamento e saida
if (etanol < (gasolina * 0.7)) {
    console.log("Você deve usar etanol")
} else {
    console.log("Você deve usar gasolina")
}