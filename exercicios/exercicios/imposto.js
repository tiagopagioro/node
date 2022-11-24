/**
 * Calculo de imposto para produtos
 */

//importar os pacotes
 const read = require('readline-sync')

 //variáveis
 let valorproduto = Number(read.question("Digite o valor do produto: ").replace(",","."))
 let imposto = ((30 / 100) * valorproduto)

 //final
 let valorcomimposto = (imposto + valorproduto)
 console.log()
 console.log("O valor do produto sem imposto foi de:  " + valorproduto)
 console.log()
 console.log("O valor do produto com imposto foi de:  " + valorcomimposto)
 console.log()