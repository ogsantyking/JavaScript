const perguntas = [
    {
        pergunta: "Qual é o gás que as plantas absorvem durante a fotossíntese?",
        opcoes: ["Oxigênio", "Nitrogênio", "Dióxido de carbono", "Hidrogênio"],
        correta: 2
    },
    {
        pergunta: "Qual é o planeta conhecido como 'Planeta Vermelho'?",
        opcoes: ["Vênus", "Marte", "Júpiter", "Saturno"],
        correta: 1
    },
    {
        pergunta: "Qual elemento químico tem o símbolo 'O' na tabela periódica?",
        opcoes: ["Ouro", "Mercúrio", "Oxigênio", "Ferro"],
        correta: 2
    },
    {
        pergunta: "O que a água (H₂O) é composta?",
        opcoes: [
            "1 átomo de hidrogênio e 1 átomo de oxigênio",
            "2 átomos de hidrogênio e 1 átomo de oxigênio",
            "2 átomos de oxigênio e 1 átomo de hidrogênio",
            "2 átomos de hélio e 1 átomo de oxigênio"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a fase da Lua em que ela não é visível da Terra?",
        opcoes: ["Lua cheia", "Quarto crescente", "Lua nova", "Quarto minguante"],
        correta: 2
    },
    {
        pergunta: "Qual é o maior órgão do corpo humano?",
        opcoes: ["Cérebro", "Fígado", "Pele", "Coração"],
        correta: 2
    },
    {
        pergunta: "Qual destes animais é um mamífero?",
        opcoes: ["Tubarão", "Pinguim", "Golfinho", "Cobra"],
        correta: 2
    },
    {
        pergunta: "O que causa os raios durante uma tempestade?",
        opcoes: [
            "Colisão de nuvens",
            "Aquecimento global",
            "Descarga elétrica entre nuvens ou entre nuvens e o solo",
            "Vento forte"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a unidade básica da vida?",
        opcoes: ["Átomo", "Molécula", "Célula", "Tecido"],
        correta: 2
    },
    {
        pergunta: "Qual fenômeno é responsável pelo som do eco?",
        opcoes: ["Refração da luz", "Reflexão do som", "Absorção de ondas", "Difração do vento"],
        correta: 1
    }
]

let perguntaAtual = 0
let pontuacao = 0
let erros = 0
let opcoesSelecionada = null

const pergunta = document.getElementById("pergunta")
const opcoes = document.getElementById("opcoes")
const botaoProxima = document.getElementById("proxima")
const quiz = document.getElementById("quiz")
const pontuacaoFinal = document.getElementById("pontuacao")
const valorPontuacao = document.getElementById("valor-pontuacao")
const botaoReiniciar = document.getElementById("reiniciar")
const errosContador = document.getElementById("erros")
const acertos = document.getElementById("acertos")

function atualizarPlacar() {
    acertos.textContent = pontuacao
    errosContador.textContent = erros
}

function mostrarPergunta() {
    const perguntaAtualObj = perguntas[perguntaAtual]
    pergunta.textContent = perguntaAtualObj.pergunta
    opcoes.textContent = ""
    perguntaAtualObj.opcoes.forEach((opcao, indice) => {
        const botao = document.createElement("button")
        botao.textContent = opcao
        botao.classList.add("opcao")
        botao.addEventListener("click", () => selecionarOpcao(indice))
        opcoes.appendChild(botao)
    })
    opcaoSelecionada = null
    botaoProxima.disabled = true
        
}

function selecionarOpcao(indice) {
    opcaoSelecionada = indice

    const opcoes = document.querySelectorAll(".opcao")
    opcoes.forEach((opcao, i) => {
        opcao.classList.toggle("selecionada" , i == indice)
    })
    botaoProxima.disabled = false 
}
function mostrarPontuacao() {
    quiz.classList.add("esconder")
    pontuacaoFinal.classList.remove("esconder")
    valorPontuacao.textContent = pontuacao
}

botaoProxima.addEventListener("click", () => {

    if(opcaoSelecionada == perguntas[perguntaAtual].correta){
        pontuacao++
    } else {
        erros++
    }
    atualizarPlacar()

    perguntaAtual++
    if(perguntaAtual < perguntas.length) {
        mostrarPergunta()
    } else {
        mostrarPontuacao()
    }
})

botaoReiniciar.addEventListener("click", () => {
    perguntaAtual = 0
    pontuacao = 0
    erros = 0

    quiz.classList.remove("esconder")
    pontuacaoFinal.classList.add("esconder")

    atualizarPlacar()
    mostrarPergunta()
})

mostrarPergunta()