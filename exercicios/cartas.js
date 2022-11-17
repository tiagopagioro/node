/**
 * Exemplo de uso do vetor
 */

let naipes = ["Ouros", "Copas", "Espadas","Paus"]
let faces = ["Az",2,3,4,5,6,7,8,9,10,"Valete","Dama","Rei"]

//Recuperando a carta Az de ouros
console.log(`Carta:  ${faces[0]} de ${naipes[0]}`)

//Recuperando a carta Dama de copas
console.log(`Carta:  ${faces[11]} de ${naipes[1]}`)

//Sorteio de uma carta
//Math.random -> gerador de números aleatórios
//Math.floor -> converte para números inteiros
let sorteionaipe = Math.floor(Math.random() * 4)
let sorteioface = Math.floor(Math.random() * faces.length)
console.log(`Carta sorteada: ${faces[sorteioface]} de ${naipes[sorteionaipe]}`)