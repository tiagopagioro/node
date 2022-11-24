/**
 * Regra de 3
 */

//importar o pacote
const read = require('readline-sync')

//variaveis
let porcentagem = Number(read.question("Digite a Porcentagem(sem o %): ").replace(",","."))
let numero = Number(read.question(`${porcentagem.toFixed(0)} % De: `).replace(",","."))

//processamento
let resultado = (porcentagem * numero) / 100

//saida 
console.log(`${porcentagem.toFixed(0)} % De ${numero.toFixed(1)} = ${resultado.toFixed(1)}`)