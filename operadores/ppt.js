//Jogo Pedra, Papel e Tesoura
const escolhaJogador = prompt("Escolha pedra, papel ou tesoura:")
//Solicita que o usuário informe qual ele quer

const escolhaPC = ["pedra, 'papel", 'tesoura'] [Math.floor(Math.random()*3)]

alert( `voce escolheu ${escolhaJogador} `)
alert(o computador escolheu $ {escolhaPC})
//mostrando qual foi a nossa escolha e qual foi a escolha do compuador

//compara se a nossa escolha foi igual a do computador
if(escolhaJogador == escolhaPC){
    alert("Empate")
} else if (escolhaJogador == "pedra" && escolhaPC == "tesoura"){
    alert("voce venceu")
} else if (escolhaJogador == "papel" && escolhaPC == "peda"){
    alert("Voce venceu")
} else{
    alert("voce perdeu")
}