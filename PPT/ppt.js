//Jogo Pedra, Papel e Tesoura
let placarjogador = 0
let placarpc = 0
let rodadas = Number(prompt("Quantas vezes desej ajogar?"))

for (let i = 0; i < rodadas; i++) {


    const escolhaJogador = prompt("Escolha pedra, papel ou tesoura:")
    

    const escolhaPC = ['pedra', 'papel', 'tesoura'][Math.floor(Math.random() * 3)]

    alert(`voce escolheu ${escolhaJogador}`)
    alert(`o computador escolheu ${escolhaPC}`)
    
    
    
    if (escolhaJogador == escolhaPC) {
        alert("Empate")
    } else if (escolhaJogador == "pedra" && escolhaPC == "tesoura") {
        alert("voce venceu")
        placarjogador++
    } else if (escolhaJogador == "papel" && escolhaPC == "pedra") {
        alert("Voce venceu")
        placarjogador++
    } else if (escolhaJogador == "tesoura" && escolhaPC == "papel") {
        alert("Voce venceu")
        placarjogador++
    } else {
        alert("voce perdeu")
        placarpc++
    }
    console.log("placar jogador:", placarjogador)
    console.log("placar Pc:", placarpc)
   
}

alert(`Fim de jogo! Placar Final: Jogador ${placarjogador} x ${placarpc} Computador`)