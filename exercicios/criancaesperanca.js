/**
 * programa de doação Criança Esperança
 */

//importar os pacotes
const read = require('readline-sync')

console.log("______________Valor da sua doação______________")
console.log("1. para doar 10 reais")
console.log("2. para doar 25 reais")
console.log("3. para doar 50 reais")
console.log("4. para doar outros valores")
console.log("5. cancelar")


//variáveis

let valor = Number(read.question("Digite a opcao desejada: "))
switch (valor) {
    case 1:
        console.log("Obrigado, você doou 10 reais")
        break
    case 2:
        console.log("Obrigado, você doou 25 reais")
        break
    case 3:
        console.log("Obrigado, você doou 50 reais")
        break
    case 4:
        let valor4 = Number(read.question("Digite o valor desejado: "))
        console.log("Obrigado você acabou de doar: " + valor4)
        break        
    case 5:
        console.log("doacao cancelada")
}


