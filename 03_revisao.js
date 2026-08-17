/*  let aluguel = 1200.00
let condominio = 250.59
let internet = 99.00
let total = aluguel + condominio + internet

console.log("O total das contas é: "+total) // A idéia é facilitar a visualização e criação do resultado */

//------------------------------------------------------------------------------

let nome = "Jhonson"
let sobrenome = "Smith"
let nome_completo = nome + " " +sobrenome  // Essa concatenação possibilita multiplos nomes diferentes à ser colocados, o "" é para deixar um espaço e possibilitar o +

console.log("Como posso ajudá-lo(a)? " +nome_completo)

//------------------------------------------------------------------------------

let salario = 2000
console.log("Seu salário é R$ "+salario)

let comissao = 100
salario = salario + comissao // Isso chama acúmulo, adicionar um novo valor na variável
console.log("Salário com comissão: "+salario)

let adicional_noturno = 200
salario = salario + adicional_noturno
console.log("Salário com adicional noturno: "+salario)

