// Atividade 3: IMC
let prompt = require("prompt-sync")()

let peso = parseFloat(prompt("Qual o seu peso?: "))
console.log("Peso: " +peso+ "kg")

let altura = parseFloat(prompt("Qual a sua altura?: "))
console.log("Peso: " +altura+ "m")

let imc = (peso / (altura * altura))
} else if (imc >= 18.5 && imc <= 24.9  ){   // Essa combinação faz com que, um valor maior ou igual de 18.5 && (e) imc menor ou igual 24.9 é um resultado.
    console.log ("Você está no peso ideal!")
}

if (imc >= 25 && imc <= 29.9){
    console.log ("Você está com sobrepeso!")
} else if (imc >= 30 && imc <= 34.9){
    console.log ("Você está com obesidade grau 1")
}

if (imc >= 35 && imc <= 39.9){
    console.log ("Você está com obesidade grau 2!")
} else if (imc >= 40 ){
    console.log ("Você está com obesidade grau 3 (grave)")
}