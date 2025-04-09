//1

let imagem = document.getElementById("imagem")
function sumir(){
    imagem.src = "imagem.starwars.webp"
}

function sumir() {
    let sumir = document.getElementById("sumir")
    if (sumir.style.display == "none") {
        sumir.style.display = "block"
    } else {
        sumir.style.display = "none"
    }
}

//02
function mudarCorC(){
    texto.style.color = "black"
    document.body.style.backgroundColor = "white"
}
function mudarCorE(){
    texto.style.color = "white"
    document.body.style.backgroundColor = "black"
}


//03
let botao3 = document.getElementById("botao3");
let texto1 = document.getElementById("texto1");

botao3.addEventListener("click", function () {
    texto1.innerText = "Meu nome é Heitor tenho 17 anos, moro em Mogi Das Cruzes, estudo no Sesi e faço o curso de Desenvolvimento de Sistemas.";
});
   

//04
let botao4 = document.getElementById("botao4")
let cores = ["green", "yellow", "blue"]
let indice = 0
botao4.addEventListener("click", function () {
    botao4.style.backgroundColor = cores[indice]
    indice = (indice + 1) 
})

//05
let botao5 = document.getElementById("botao5");
 