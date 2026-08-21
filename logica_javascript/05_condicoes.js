// Aula 05 - Condições

let prompt = require("prompt-sync")()

console.log("Bem vindo ao DETRAN Amigão!")
let idade = prompt("Digite a sua idade: ")

// Comparadores de informações, dependendo do valor irá geral resultados diferentes de acordo com o if e else ("se" e "outro")
// Os comparadores são maior(>), menor(<), igual (==), maior OU igual (>=), menor OU igual (<=), diferente (!=)

if(idade > 18){
    console.log("Você já tem idade para tirar a CNH")
} else {
    console.log("Você não tem idade para tirar a CNH")
}