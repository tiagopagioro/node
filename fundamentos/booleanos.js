/**
 * Estudo das variáveis booleanas
 */

let sw = false
let lamp = true
console.log(typeof(sw))
console.log(sw)
console.log(typeof(lamp))
console.log(lamp)
//No JS é possível usar 0 ou 1 como booleano
sw = !!1 //(!0 !1 !!0 !!1)
console.log(typeof(sw))
console.log(sw)
//Dica! É possível usar o tipo booleano como uma estrutura de controle condicional
console.log(sw || "Lâmpada apagada")