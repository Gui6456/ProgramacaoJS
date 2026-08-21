// Atividade 6: Investigação Criminal (Murder Mystery)
let prompt = require("prompt-sync")()

let telefonou = prompt("Telefonou para a vítima? ") 
console.log("") // Isso cria um espaçamento entre as respostas
let esteve = prompt("Esteve no local do crime? ") 
console.log("")
let moraPerto = prompt("Mora perto da vítima? ") 
console.log("")
let devia = prompt("Devia para a vítima? ") 
console.log("")
let trabalhou = prompt("Já trabalhou com a vítima? ") 
console.log("")

let total = 
    (telefonou == "sim") +
    (esteve == "sim") +
    (moraPerto == "sim") +
    (devia == "sim") +
    (trabalhou == "sim")

if (total == 2) {
    console.log("Você ser Suspeita")
} else if (total == 3 || total == 4) { // As && representam (E) e as || representam (OU)
    console.log("Você ser Cúmplice")
} else if (total == 5) {
    console.log("Você ser Assassino")
} else {
    console.log("Você ser Inocente")
}
