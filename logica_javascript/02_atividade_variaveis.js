console.log("Ficha do cliente! \n")  // Não é possível somar textos com textos (strings), só números com números (int ou float, ambos se somam separadamente ou juntos)
// Para escolher entre int ou string, pensar se a informação precisa ser somada/dividida/multiplicada etc, se não, escolher string

let nome_completo = "Rogisvaldo do Santos" // string
let idade = 33 // int           
let cpf = 32844133317 // int ou string, caso for string seria "328.441.333-17"
let endereco = "Rua de Jizus" // string                                           
let telefone = 16992419834 // int ou string, caso for string seria "(16)99241-9834"
let data_de_nascimento = "10/06/1977" // string, caso a pergunta for a idade, ai seria interessante ser um int
let saldo_inicial_da_conta = 3300.00 // int 
let cartao_debito = true // bool
let cartao_credito = false // bool
let limite_inicial = 550.99 // float

console.log("Boa tarde " +nome_completo+ ", a ficha criada ficou com a idade " +idade+ " anos" + ", CPF " +cpf+ ", endereço " +endereco+ ", telefone " +telefone+ ", data de nascimento " +data_de_nascimento+ " e saldo inicial R$" +saldo_inicial_da_conta+ " reais \n ")
console.log("Sobre a informação de que o cartão de débito começou " +cartao_debito+ " e o cartão de crédito permanecerá por um tempo " +cartao_credito+ " porém com o limite inicial de R$" +limite_inicial+ " reais" )
