// Atividade 1: Negativo ou Positivo
let prompt = require("prompt-sync")()

let numero = prompt("Escolha um número: ")

console.log("Carregando... \n")

if (numero >= 0 ){
    console.log("Esse número é Positivo!")
} else {
    console.log("Esse número é Negativo!")
}
