/**
 * Conversão de Fahrenheit para Celsius
 */

//importar os pacotes
const read = require('readline-sync')

//variáveis
let fahrenheit = Number(read.question("Temperatura em Fahrenheit:  ").replace(",","."))

//processamento 
let celsius = (fahrenheit - 32) / 1.800

//saída
console.log(`${celsius.toFixed(1)} Graus Celsius`)