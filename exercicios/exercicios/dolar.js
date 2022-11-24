/**
 * Conversão de R$ para US$
 */

//importar os pacotes
 const read = require('readline-sync')

 //variáveis

 let dolar = Number(read.question("Digite o valor do dolar atualmente: ").replace(",","."))
 let dolares = Number(read.question("Digite em R$ quantos dolares voce deseja comprar: ").replace(",","."))

//final
 let valortotal = (dolar * dolares)
console.log("Você gastará (em R$):  " + valortotal)
