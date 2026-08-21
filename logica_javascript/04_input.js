// Aula 04 - INPUT  //* O arquivo "package.json" serve como um norteador da versão, para conseguir baixar as dependências restantes do prompt-sync já que o.gitignore irá deixar o "node_modules" na máquina, só escrever "npm i" no cmd ou powershell para baixa-los */ 

let prompt = require("prompt-sync")()

let nome = prompt("Olá, digite o seu nome: ") // o prompt serve como um console.log, porém ele resgata informações, o console só mostra
console.log("Seja bem-vindo(a) "+nome+ "\n\n\n") 

// --------------------------------------------------------------------------------------------------------------

prompt = require("prompt-sync")()

nome = prompt ("Olá, digite o seu nome: ")
let sobrenome = prompt ("Digite seu sobrenome: ")
let idade = prompt ("Digite sua idade: ")
let nome_completo = nome + " " + sobrenome // É o certo simplificar as informações assim que possível 
console.log("Seja bem-vindo(a) "+nome_completo+  " você tem " +idade+ " aninhos uwu"+ "\n\n\n") 

// --------------------------------------------------------------------------------------------------------------

prompt = require("prompt-sync")()

let produto = prompt("Digite o nome de um produto: ")
let preco1 = prompt("Digite o preço de "+produto+ " em R$")
let produto2 = prompt("Digite o nome de outro produto: ")
let preco2 = prompt("Digite o preço de "+produto2+ " em R$")

console.log("----- RELATÓRIO -----")
console.log(produto+ " - R$ "+preco1 ) 
console.log(produto2+ " - R$ "+preco2 ) 

// Caso eu queira isolar alguns consoles para mexer em outros, basta colocar um /* no começo e outro */ no fim de outra linha para esconder todo o espaço dentro