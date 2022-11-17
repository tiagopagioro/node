/**
 * Cálculo de peso IMC
 */

//importar os pacotes
const read = require('readline-sync')

//variáveis
console.log("Cálculo de peso IMC")
let peso = Number(read.question("Peso em KG:  "))
let altura = Number(read.question("Qual sua altura em metros?:  ").replace(",","."))
let imc = (peso/(altura * altura))

//saída
if(imc < 18.5) {
    console.log("Você está abaixo do peso")
}
if(imc > 18.5 && imc < 24.9) {
    console.log("Você está com o peso normal")
}
if(imc > 25 && imc < 29.9) {
    console.log("Você está com sobrepeso")
}
if(imc > 30 && imc < 34.9) {
    console.log("Você está com obesidade grau I")
}
if(imc > 35 && imc < 39.9) {
    console.log("Você está com obesidade grau II")
}
if(imc > 40) {
    console.log("Você está com obesidade grau III ou mórbida")
}
