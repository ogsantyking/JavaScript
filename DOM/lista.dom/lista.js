<p id="text">Este é um parágrafo.</p>
<button onclick="mudarCorTexto()">Mudar Cor</button>
<script src="script.js"></script>
function mudarCorTexto() {
    document.getElementById("text").style.color = "red";
}

<button id="btnColor" onclick="mudarCorBotao()">Clique aqui</button>
<script src="script.js"></script>
function mudarCorBotao() {
    document.getElementById("btnColor").style.backgroundColor = "blue";
}
 
2
 
 <p id="textSize" ondblclick="aumentarFonte()">Clique duas vezes aqui</p>
<script src="script.js"></script>
 function aumentarFonte() {
    document.getElementById("textSize").style.fontSize = "24px";
}
 

3
 <div id="textBlock">Passe o mouse aqui</div>
<link rel="stylesheet" href="styles.css">
#textBlock {
    width: 200px;
    height: 100px;
    border: 1px solid black;
    text-align: center;
    line-height: 100px;
}

#textBlock:hover {
    background-color: blue;
    color: white;
}

4
<img id="imgResize" src="imagem.jpg" width="100" height="100">
<button onclick="aumentarImagem()">Aumentar Imagem</button>
<script src="script.js"></script>
function aumentarImagem() {
    let img = document.getElementById("imgResize");
    img.width = 200;
    img.height = 200;
}

5
<img id="imgRound" src="imagem.jpg" width="100" height="100">
<button onclick="arredondarImagem()">Deixar Redonda</button>
<script src="script.js"></script>
function arredondarImagem() {
    document.getElementById("imgRound").style.borderRadius = "50%";
}

6
<p id="p1">Parágrafo 1</p>
<p id="p2">Parágrafo 2</p>
<p id="p3">Parágrafo 3</p>

<button onclick="alterarP1()">Alterar P1</button>
<button onclick="alterarP2()">Alterar P2</button>
<button onclick="alterarP3()">Alterar P3</button>

<script src="script.js"></script>
function alterarP1() {
    let p = document.getElementById("p1");
    p.style.backgroundColor = "yellow";
    p.style.color = "blue";
}

function alterarP2() {
    let p = document.getElementById("p2");
    p.style.backgroundColor = "green";
    p.style.color = "white";
    p.style.fontSize = "20px";
}

function alterarP3() {
    let p = document.getElementById("p3");
    p.style.backgroundColor = "red";
    p.style.color = "white";
    p.style.fontSize = "24px";
    p.style.borderRadius = "10px";
}