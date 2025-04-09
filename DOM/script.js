let titulo = document.getElementById("titulo")
//document = HTML
// getElementByID = pegue o elemento pelo id, logo, quando fizemos isso guardamos o que estava no HTML em uma variavel no js

console.log(titulo.innerText)

//--------------------------
let texto = document.getElementById("texto")
texto.innerText = "Texto Alterado"
// desse jeito trocamos o texto de uma tag
texto.style.color = "blue"
// usando o style podemos mexer no css

let botao = document.getElementById("botao")

botao.addEventListener("click", function() {
    alert("botão clicado")
})

let duplo = document.getElementById("duplo") 
duplo.addEventListener("dblclick", function() {
        duplo.style.backgroundColor = "red"
    })

    let passe = document.getElementById("passe")
    passe.addEventListener("mousemove", function(){

    })
    passe.addEventListener("mouseout", function(){
        passe.innerText = "passe o mouse aqui"
        passe.style.backgroundColor = "blue"
        passe.style.fontSize = "16px"
    })