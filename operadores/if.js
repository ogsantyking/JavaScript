//verificacao de idade

let idade = prompt ("Qual sua idade?")
console.log("sua idade é", idade)

if(idade >=18) {
console.log("Você é maior de idade")
} else {
console.log("Você é menor de idade")
}

console.log("----------------------------")

// vericacao de numero par e numero impar
let numero = prompt("Escolha um número:")
let resultado = numero % 2 //resto
if (resultado == 0){ 
    console.log("O numero e par")
}else {
    console.log("O número é impar")
}

console.log("----------------------------")

// avalicao de aluno
let nota1 = Number (prompt("Qual a primeira nota"))
let nota2 = Number (prompt("QUal a segunda nota"))
let total = (nota1 + nota2) / 2


if (total >=7){
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}
console.log(total)

console.log("----------------------------")

// entrada na festa
let idade2 = prompt ("Qual sua idade?")
if(idade2 >=18) {
console.log("Entrada permitida")
} else {
console.log("Entrada Proibida")
}

console.log("----------------------------")

// senha
let senha = prompt ("Insira a senha:")
if (senha ==1234){
    console.log("senha aprovada")
}else{
    console.log("Senha recusada")
}

console.log("----------------------------")

// clima
 let clima = prompt ("Qual a temperatura?")
 if (clima >=30){
    console.log("Esta calor")
} else {
console.log("Esta frio")
}

console.log("----------------------------")

// positivo ou negativo
let Numero = prompt("Escolha um número:")
let resultado1 = Numero
if (resultado1 >= 0){ 
    console.log("O numero é positivo")
}else {
    console.log("O número é negativo")
}




