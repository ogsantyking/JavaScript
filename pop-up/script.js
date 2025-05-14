const botaoAbrirPopUp = document.getElementById("abrirPopUp")
const popup = document.getElementById("popup")
const fundo = document.getElementById("fundo")
const mensagem = document.getElementById("mensagem")

botaoAbrirPopUp.addEventListener("click", () => {
    popup.classList.remove("escondido")
    fundo.classList.remove("escondido")
})
function responder (){
    mensagem.innerText = "voce escolheu:  " + resposta
    popup.classList.add
}