/**
 * idade em semanas
 */

//importar os pacotes
const read = require('readline-sync')

//variáveis
let idade = Number(read.question("Digite sua idade: "))

let semanas = (idade * 52.2)

console.log("")
console.log("Em semanas você teria esse tempo de vida: " + semanas)
console.log("")