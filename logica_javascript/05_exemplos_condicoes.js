// Aula 05 - Exemplos de Condições

let prompt = require("prompt-sync")()
/*
let usuario = prompt("Digite o seu usuario: ")
if (usuario == "Roberton"){
    console.log("Acesse concedido!")
} else {
    console.log("Acesso negado..........")
}
*/
let idade = parseInt (prompt("Digite sua idade: "))
if (idade > 99 ){
    console.log("Idade inválida! Tente novamnete...")
}
if (idade = 0 ){
    console.log("Idade inválida! Tente novamnete...")
}

console.log("A idade digitada foi: " +idade)