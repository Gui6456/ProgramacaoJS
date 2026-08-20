// Atividade 2: O maior número
let prompt = require("prompt-sync")()

let numero1 = Number (prompt("Escolha um número: "))
let numero2 = Number (prompt("Escolha outro número: "))

if (numero1 > numero2 ) {
    console.log("O maior número é o: " +numero1)
} else if(numero2 > numero1) 
    console.log("O maior número é o: " +numero2)
