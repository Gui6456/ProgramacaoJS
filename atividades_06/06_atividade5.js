// Atividade 5: Time Vencedor
let prompt = require("prompt-sync")()

let time1 = console.log("Time Masculino" )
let time1_gols = parseInt(prompt("Quantos gols o Time masculino fez?: "))
console.log("O Time Masculino fizeram: " + time1_gols + " gols \n")

let time2 = console.log("Time dos Garotos" )
let time2_gols = parseInt(prompt("Quantos gols o Time dos Garotos fez?: ")) 
console.log("O Time dos Garotos fizeram: " + time2_gols + " gols \n")

if (time1_gols == time2_gols){
    console.log("EMPATOU GUYS!")
} else if (time1_gols > time2_gols)
    console.log("O Time Masculino venceu!")
    else // Posso colocar um else sozinho para duas condições, para não junta-las no fim
    console.log("O Time dos Garotos venceu!")      
