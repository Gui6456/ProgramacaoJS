// Aula 04 - Converter variáveis

let prompt = require("prompt-sync")()

let numero1 = prompt("Digite um numero: ")
numero1 = parseInt(numero1) // parseInt faz com que o valor dá variável seja um número inteiro obrigatoraimente e parsefloat faz com que seja um número decimal/quebrado

let numero2 = parseInt (prompt("Digite outro numero: " ) ) // Esse é outro método de escrever, porém é mais confuso

let soma = numero1 + numero2

console.log("O resultado é: "+soma) 

// ------------------------------------------------------------------------------------------------------

// --- Atividade 1

prompt = require("prompt-sync")()

let ano = prompt("Em que ano você nasceu? ")
ano = parseInt(ano)

let subtracao = 2026 - ano

console.log("Sua idade é :" +subtracao)  

// --- Atividade 2 

prompt = require("prompt-sync")()

let nota1 = prompt("digite 1 nota de x aluno: ")
nota1 = parseInt(nota1)

let nota2 = prompt("digite outra nota de x aluno: ")
nota2 = parseInt(nota2)

let nota3 = prompt("digite mais uma nota de x aluno: ")
nota3 = parseInt(nota3)

let media = (nota1 + nota2 + nota3) / 3

console.log("A médiadesse aluno é: "+media) 

//  --- Atividade 3 

prompt = require("prompt-sync")()

let nome_produto = prompt("Digite o nome do produto: ")
let preco = prompt("Digite o preço do produto: ")
let preco = parseFloat(preco)
let qnt_estoque = prompt("Diga quantos desse produto tem no estoque: ")
let qnt_estoque = parseInt(qnt_estoque)
let venda = qnt_estoque * preco // ou preco * qnt_estoque

 console.log("Será vendido " +nome_produto+ ", e você faturará R$ " +venda)

