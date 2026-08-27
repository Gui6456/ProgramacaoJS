// Aula 11 - Funções com retorno

// Consigo chamar essa função várias vezes com algum valor da minha escolha, pois ela possui um parâmetro de uma variável, sendo o n1 nesse caso
somar(9,12)  
somar(0,-10)  
somar(132,9201830129)  

// Funções com retorno e parâmetros

function somar(n1,n2){
    let soma = n1 + n2
    console.log(`A soma de ${n1} e ${n2} é ${soma}`)
}

// Funções vazias (void)

function somar_numeros(){ 

    let n1 = 6
    let n2 = 7

    let soma = n1 + n2  // Além de poder fazer a concatenação de variáveis e texto com "", é possivel fazer com `` dessa maneira.
    console.log(`A soma de ${n1} e ${n2} é ${soma}`)   // Se chama polarização, esse método de juntar strings com variáveis com o ``
}

function numero_positivo(){
    let n1 = 6
    let resposta = "negativo"   // Isso encurta o código, e deixa o uso do else desnecessário, já que estruturado dessa maneira é o suficiente

    if (n1 >= 0){
        resposta = "positivo"
    } 

    console.log(`O número ${n1} é ${resposta}!`)
}