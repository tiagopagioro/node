/**
 * Simulação de um Ponto de venda
 */

//importar os pacotes
const read = require('readline-sync')

//variáveis
let valortotal = Number(read.question("Digite qual foi o valor da compra: ").replace(",","."))
let desconto1 = Number(read.question("Digite qual foi o valor do desconto (sem digitar %): ").replace(",","."))
let valorpago = Number(read.question("Digite qual foi o valor pago: ").replace(",","."))

//processamento
let desconto2 = ((desconto1 / 100) * valortotal)
let totalcomdesconto = (valortotal - desconto2)
let troco = (valorpago - totalcomdesconto)

//saída
console.log("Este será o valor do troco:  "+ troco)