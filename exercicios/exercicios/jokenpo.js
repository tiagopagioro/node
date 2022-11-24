/**
 * Jogo - Pedra, Papel e Tesoura
 */

//importar os pacotes
const read = require('readline-sync')

console.log("______________JoKemPô______________")
console.log("1. Pedra")
console.log("2. Papel")
console.log("3. Tesoura")
console.log("")
console.log("")

//Lógica do jogador

let jogador = Number(read.question("Digite a opcao desejada: "))
switch (jogador) {
    case 1:
        console.log("Jogador escolheu Pedra")
        break
    case 2:
        console.log("Jogador escolheu Papel")
        break
    case 3:
        console.log("Jogador escolheu Tesoura")
        break
    default:
        console.log("Opcao invalida")
        break        
}

//Lógica do Computador

let computador = Math.floor(Math.random() * 3 + 1)
switch (computador) {
    case 1:
        console.log("Computador escolheu Pedra")
        break
    case 2:
        console.log("Computador escolheu Papel")
        break
    case 3:
        console.log("Computador escolheu Tesoura")
        break  
}
console.log("")

//Lógica de Resultado

if (jogador == computador) {
    console.log("Empate")
}
else if ((jogador == 1 && computador == 3) || (jogador == 2 && computador == 1) || (jogador == 3 && computador == 2)) {
    console.log("Jogador Venceu")
} else {
    console.log("Computador Venceu")
}
