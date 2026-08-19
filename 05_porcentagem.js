// Aula 05 - Porcentagem

let prompt = require("prompt-sync")() // O nome técnico para o require e sua função, seria de importar

let valor = prompt("Digite o valor: ")
valor = parseFloat(valor)

let desconto = parseFloat (prompt("Escolha o desconto: ") )
desconto = desconto / 100

let total = valor * desconto
let valor_com_desconto = valor + total // Se fosse uma porcentagem de acréscimo, seria +, se fosse uma redução, seria -

console.log(valor_com_desconto+ " e " +total)


