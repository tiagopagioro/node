/**
 * Calcular preço de Custo e Venda com Lucro
 */

//importação de pacotes
const read = require(`readline-sync`)
//variáveis + entrada
let custo = Number(read.question("Custo:  ").replace(",","."))
let lucro = Number(read.question("Margem de Lucro(%):  ").replace(",","."))
//processamento
let venda = custo + ((lucro * custo)/100)
//saída
console.log(`Venda:  R$ ${venda}`)

