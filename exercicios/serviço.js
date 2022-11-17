/**
 * Calculo da hora de trabalho
 */

//importar os pacotes
const read = require('readline-sync')

//variáveis
let remumensal = Number(read.question("Pretensao salarial por mes: ").replace(",","."))
let custoperacionamensal = Number(read.question("Custo operacional mensal: ").replace(",","."))
let cargahorario = Number(read.question("Horas trabalhadas por mes: ").replace(",","."))

//processamento
let res30 = (remumensal * 0.3)
let res20invest = (remumensal * 0.2)
let horatecnica = (remumensal +(res30 +(res20invest + custoperacionamensal))) / cargahorario

//saida
console.log("Reserva de 20 por cento para investimentos:  "+res20invest)
console.log("Reserva de 30 por cento geral:  "+res30)
console.log("Carga Horaria mensal:  "+cargahorario)
console.log("Remuneracao mensal:  "+remumensal)
console.log("Custo operacional:  "+custoperacionamensal)
console.log("Hora Tecnica:  "+horatecnica)