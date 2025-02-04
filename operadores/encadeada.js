// Número positivo, negativo ou zero
let numero = prompt("Escolha um número:")
if(numero > 0) {
    console.log("Positivo")
} else if (numero < 0) {
    console.log("Negativo")
} else {
    console.log("Zero")
}
console.log("------------------------------------------------")
let nota = Number(prompt("Qual a nota?"))
if (nota >=9) {
    console.log("Exelente")
} else if (nota >=7) {
    console.log("Bom")
}  else if (nota >=5) {
    console.log("Regular")

}  else {
    console.log("Ruim")
}
console.log("------------------------------------------------")
let valor = Number(prompt("Qual o valor da compra?"))
if (valor >= 500) {
  console.log("Ganhou 20% de desconto")
} else if (valor >= 300) {
  console.log("Ganhou 10% de desconto")
} else {
  console.log("Sem desconto")
}

// classificacao de idade
let idade = Number(prompt("Qual a idade?"))
if (idade <12) {
    console.log("Criança")
} else if (idade <17) {
    console.log("Adolescente")
}  else if (idade <59) {
    console.log("Adulto")

}  else if (idade >=60) {
    console.log("Idoso")
}

// avaliacao de temperatura

let temperatura = Number(prompt("Qual a temperatura?"))
if (temperatura <10) {
    console.log("Muito frio")
} else if (temperatura <20) {
    console.log("Frio")
}  else if (temperatura <30) {
    console.log("Agradavel")

}  else if (temperatura >30) {
    console.log("Muito Quente")
}

// classificacao de turno

let turno = prompt("Qual o turno?")
if (turno =="M") {
    console.log("Bom Dia!")
} else if (turno =="V") {
    console.log("Boa Tarde!")
}  else if (turno =="N") {
    console.log("Boa Noite!")
}  else {
    console.log("Turno invalido")
}

// Desconto Progressivo

let Valor = Number(prompt("Qual o valor da compra?"))
if (Valor <=100) {
  console.log("Ganhou 5% de desconto")
} else if (Valor <= 200) {
  console.log("Ganhou 10% de desconto")
} else if (Valor > 200) {
  console.log("Ganhou 15% de desconto")
}

// sistema de notas escolares
let Nota = Number(prompt("Qual a nota?"))
if (nota >90) {
    console.log("A")
} else if (nota >80) {
    console.log("B")
}  else if (nota >70) {
    console.log("C")
}
else if (nota >60) {
    console.log("D")
}
else if (nota <60) {
    console.log("F")
}

//verificar dia de semana

let Numerodia = Number(prompt("Digite um numero?"))
 if (Numerodia ==1) {
    console.log("Domingo")
}  else if (Numerodia ==2) {
    console.log("Segunda-feira")
}
else if (Numerodia ==3) {
    console.log("Terça-feira")
}
else if (Numerodia ==4) {
    console.log("Quarta-feira")
}
else if (Numerodia ==5) {
    console.log("Quinta-feira")
}
else if (Numerodia ==6) {
    console.log("Sexta-feira")
}
else if (Numerodia ==7) {
    console.log("Sábado")
}

// Classificacao de pistas em corridas

let distante = Number(prompt("Qual a distancia?"))
if (distante <400) {
    console.log("Pista Curta")
} else if (distante <800) {
    console.log("Pista Media")
}  else if (distante <1500) {
    console.log("Pista Longa")

}  else if (distante >1500) {
    console.log("Pista Muito Longa")
}

//Pontuacao de jogo de Video Game

let pontos = Number(prompt("Qual a Pontuação?"))
if (pontos <1000) {
    console.log("Iniciante")
} else if (pontos <5000) {
    console.log("Intermediario")
}  else if (pontos <10000) {
    console.log("Avançado")

}  else if (pontos >10000) {
    console.log("Mestre")
}





















