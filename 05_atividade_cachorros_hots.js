let prompt = require("prompt-sync")();

console.log("==============================================")
console.log("    Cadastro de ---- Conraditoz Doguis'itos   ")
console.log("==============================================")

console.log("Boa tarde Operador! Por favor, digite os preços dos itens correspondentes: \n")
let item1 = "Pão";
let item2 = "Salsicha";
let item3 = "Purê de batata";
let item4 = "Queijo";
let item5 = "Bacon";

item1 = parseFloat(prompt("Digite o preço do " + item1 + ": R$"))
item2 = parseFloat(prompt("Digite o preço do " + item2 + ": R$"))
item3 = parseFloat(prompt("Digite o preço do " + item3 + ": R$"))
item4 = parseFloat(prompt("Digite o preço do " + item4 + ": R$"))
item5 = parseFloat(prompt("Digite o preço do " + item5 + ": R$"))

let porcentagem_usuario = parseInt(prompt("Digite a porcentagem de lucro desejado: "));
let lucro_desejado = porcentagem_usuario / 100;

console.log("==============================================")
console.log("    Cardápio de ---- Conraditoz Doguis'itos   ")
console.log("==============================================") 

console.log("O lucro aplicado será de: " + porcentagem_usuario + "%\n");

let custo_pure = item1 + item3 + item5 + item2;
let lucro_pure = custo_pure * lucro_desejado;
let venda_pure = custo_pure + lucro_pure;

let custo_cremoso = item1 + item2 + item2 + item4;
let lucro_cremoso = custo_cremoso * lucro_desejado;
let venda_cremoso = custo_cremoso + lucro_cremoso;

let custo_especial = item1 + item2 + item3 + item4 + item5;
let lucro_especial = custo_especial * lucro_desejado;
let venda_especial = custo_especial + lucro_especial;

let custo_combo = custo_pure + custo_cremoso + custo_especial;
let lucro_combo = custo_combo * lucro_desejado;
let venda_combo = custo_combo + lucro_combo;

console.log("CACHORRO QUENTE COM PURÊ");
console.log("Ingredientes: pão, purê de batata, bacon, salsicha");
console.log("Preço de custo será de: R$ " + custo_pure)
console.log("Preço de venda será de: R$ " + venda_pure+ "\n")

console.log("CACHORRO QUENTE CREMOSO");
console.log("Ingredientes: pão, purê de batata, bacon, salsicha");
console.log("Preço de custo será de: R$ " + custo_cremoso)
console.log("Preço de venda será de: R$ " + venda_cremoso+ "\n")

console.log("CACHORRO QUENTE ESPECIAL");
console.log("Ingredientes: pão, purê de batata, bacon, salsicha");
console.log("Preço de custo será de: R$ " + custo_especial)
console.log("Preço de venda será de: R$ " + venda_especial+ "\n")

console.log("COMBO CACHORROS QUENTES");
console.log("Ingredientes: pão, purê de batata, bacon, salsicha");
console.log("Preço de custo será de: R$ " + custo_combo)
console.log("Preço de venda será de: R$ " + venda_combo+ "\n")

console.log("A porcentagem utilizada para obter lucro foi de: " +porcentagem_usuario + "%")












