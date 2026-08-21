// Aula 06: Práticas com condições
let prompt = require("prompt-sync")()

let preco_sp = parseFloat(110)
let preco_arara = parseFloat(70.90)
let preco_seguro = parseFloat(169.90)

console.log("Escolha seu destino: ")
console.log("1 - São Paulo por R$ " +preco_sp)
console.log("2 - Araraquara por R$ " +preco_arara)
let resposta = prompt("Digite uma opção: ")

if (resposta == "1"){
    total = preco_sp    
} else{
    total = preco_arara
}

let seguro = prompt("Deseja adicionar um seguro por mais R$ " + preco_seguro + "? ")
if (seguro == "sim"){ // Nesse caso não é necessário o else
    total = total + preco_seguro
} 

let cupom = prompt("Digite seu cupom de desconto: ")

if (cupom == "gratis"){
    console.log("Parabéns, você recebeu 10% de desconto na sua primeira viagem!")
    let desconto = total * 0.10
    total = total - desconto  // Para confirmar o cálculo é: (Preço da passagem + Preço do seguro) * 0,10 = (10% do valor) - (valor total calculado) = valor com desconto
} else{
    console.log("Suma daqui!")
}

let email = prompt("Você deseja receber promoções no seu email?: ")

if (email == "sim"){
    console.log("Obrigado por querer cara!")
} else{
    console.log(">:(" + "\n")
}

console.log("O total da viagem é de: R$ "+total+ "\n")

console.log("Formas de pagamento: ")
console.log("1 - Cartão de crédito (acréscimo de 5%) ")
console.log("2 - Pix (desconto de 5%) ")
resposta = prompt ("Escolha uma opção: ")

if (resposta == 1) {
    let cartao_credito = total * 0.05
    total = total + cartao_credito // Acréscimo = (+)
} else {
    let pix = total * 0.05
    total = total - pix // Desconto = (-)
}

console.log("O total pago será de: " +total)
console.log("Obrigado, volte sempre!")