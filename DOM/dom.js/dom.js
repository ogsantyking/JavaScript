// arquivo dom.js

let imagem = document.getElementById("imagem")

imagem.addEventListener("mouseover" , function() {
    imagem.setAttribute("src" , "leao.jpg")
})
imagem.addEventListener("mouseout" , function() {
    imagem.setAttribute("src" , "mar.jpg")
})

let lista = document.getElementById("lista")
let adicionar = document.getElementById("adicionar")
let reover = document.getElementById("remover")

adicionar.addEventListener("click" , function(){
    let novoitem = document.createElement("li")
    novoitem.innerText = "Novo Item"
    lista.appendChild (novoitem)
})
