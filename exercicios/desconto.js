/**
 * Calcular o Desconto
 */

//importar os pacotes
const read = require('readline-sync')

//variáveis
let total = Number(read.question("Valor da Compra:  ").replace(",","."))
let desconto = Number(read.question("Porcentagem do Desconto (nao digitar %):  ").replace(",","."))

//processamento
let totaldesconto = (total - ((total * desconto)) /100 ) 
{
    console.log("O valor com desconto foi de:  " + totaldesconto)
}
