/**
 * Idade em meses
 */

//importar os pacotes
const read = require('readline-sync')

//variáveis
let idade = Number(read.question("Digite sua idade: "))
let meses = (idade * 12)
let dias = (idade * 365)
let horas = (idade * 8760)
let minutos = (idade * 525600)

console.log("")
console.log("Em meses você tem esse tempo de vida: " + meses)
console.log("")
console.log("Em dias você tem esse tempo de vida: " + dias)
console.log("")
console.log("Em horas você tem esse tempo de vida: " + horas)
console.log("")
console.log("Em meses você tem esse tempo de vida: " + minutos)
console.log("")

