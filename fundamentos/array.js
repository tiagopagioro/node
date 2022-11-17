/**
 * Array - estudo do array(vetor)
 */

//para criar um vetor, basta usar colchetes
//índice         [0]           [1]         [2]       [3]  
let times = ["Corinthians","Palmeiras","São Paulo","Santos"]

console.log(times)
//no JS um vetor é heterogêneo e dinâmico
console.log(typeof(times))
//para saber o tamanho do vetor
console.log(times.length)
//Recuperar o índice de um item armazenado no vetor
console.log(times.indexOf("São Paulo"))
//Recuperar um valor do vetor
console.log(times[2])
console.log(times[5])
//Adicionando um item ao vetor
times[5] = "Flamengo"
console.log(times)
//Adicionando multiplos itens ao vetor
times.push("Cruzeiro","Sport Recife","Paysandu")
console.log(times)
console.log(times.length)
//Adicionando itens de tipos diferentes ao vetor 
times.push(1977,null,"Bragantino",true)
console.log(times)
//Removendo um item específico do vetor
delete times[2]
console.log(times)
//Removendo o último item do vetor
times.pop()
console.log(times)