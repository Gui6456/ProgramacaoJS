// Atividade 04: João Papo-de-Pescador
let prompt = require("prompt-sync")()

let limite = 50
let multa_kg_excedente = 4.25

let peso = parseFloat(prompt("Digite o peso total dos peixes de hoje (em kg): "))

if (peso > limite){
    let excesso = peso - limite
    let multa = excesso * multa_kg_excedente
    console.log("Você excedeu o peso limite de " +excesso+ "kg")
    console.log("O valor da multa é R$" +multa)
} else {
    console.log("Tá seguro hoje patrão, cuidado!")
}
