const perguntas = [
      {
        pergunta: "O que significa a sigla SENAI?",
        opcoes: [
            "Serviço Nacional de Aprendizagem Industrial",
            "Secretaria Nacional de Administração e Inovação",
            "Sociedade Nacional de Ensino e Instrução",
            "Sistema Nacional de Avaliação Industrial"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o foco principal dos cursos do SENAI?",
        opcoes: [
            "Ensino de artes",
            "Formação técnica e profissional para a indústria",
            "Cursos de culinária",
            "Educação infantil"
        ],
        correta: 1
    },
    {
        pergunta: "Qual dessas áreas é comum nos cursos do SENAI?",
        opcoes: [
            "Indústria e tecnologia",
            "Medicina",
            "Direito penal",
            "Arquitetura"
        ],
        correta: 0
    },
    {
        pergunta: "O SENAI é mantido por qual setor?",
        opcoes: [
            "Governo federal",
            "Sistema S, ligado à indústria",
            "Escolas particulares",
            "ONGs internacionais"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a idade mínima geralmente exigida para cursos técnicos do SENAI?",
        opcoes: [
            "10 anos",
            "14 anos",
            "16 anos",
            "18 anos"
        ],
        correta: 1
    },
    {
        pergunta: "O SENAI oferece cursos nas modalidades:",
        opcoes: [
            "Somente presenciais",
            "Somente online",
            "Presenciais e a distância (EAD)",
            "Somente por correspondência"
        ],
        correta: 2
    },
    {
        pergunta: "Qual documento é geralmente necessário para se inscrever no SENAI?",
        opcoes: [
            "Carteira de trabalho",
            "Passaporte",
            "RG e CPF",
            "Carteira de vacinação"
        ],
        correta: 2
    },
    {
        pergunta: "Além de cursos, o SENAI também oferece:",
        opcoes: [
            "Shows musicais",
            "Treinamentos esportivos",
            "Serviços técnicos e de inovação para indústrias",
            "Aulas de teatro"
        ],
        correta: 2
    },
    {
        pergunta: "O SENAI pertence ao mesmo sistema de qual outra instituição?",
        opcoes: [
            "SENAC",
            "SENAR",
            "SESI",
            "UNESCO"
        ],
        correta: 2
    },
    {
        pergunta: "O SENAI é reconhecido por sua qualidade em:",
        opcoes: [
            "Educação para o setor industrial",
            "Educação artística",
            "Formação de médicos",
            "Cursos de idiomas estrangeiros"
        ],
        correta: 0
    },
    {
    pergunta: "Qual curso técnico do SENAI é voltado para manutenção de máquinas industriais?",
    opcoes: [
        "Técnico em Eletroeletrônica", 
        "Técnico em Mecânica", 
        "Técnico em Logística", 
        "Técnico em Vestuário"
    ],
    correta: 1
  },
  {
    pergunta: "Qual desses cursos é oferecido pelo SENAI na área de tecnologia da informação?",
    opcoes: [
        "Técnico em Desenvolvimento de Sistemas", 
        "Técnico em Nutrição", 
        "Técnico em Enfermagem", 
        "Técnico em Agronegócio"
    ],
    correta: 0
  },
  {
    pergunta: "Em qual setor o curso Técnico em Edificações do SENAI atua?",
    opcoes: [
        "Saúde",
        "Construção civil", 
        "Varejo", 
        "Logística"
    ],
    correta: 1
  },
  {
    pergunta: "Qual das opções é uma vantagem de fazer um curso técnico no SENAI?",
    opcoes: [
        "Diploma universitário", 
        "Alta taxa de empregabilidade", 
        "Diploma internacional", 
        "Estudo gratuito no exterior"
    ],
    correta: 1
  },
  {
    pergunta: "Qual dos cursos abaixo é mais voltado à área de energia?",
    opcoes: [
        "Técnico em Redes de Computadores", 
        "Técnico em Eletrotécnica", 
        "Técnico em Alimentos", 
        "Técnico em Vestuário"
    ],
    correta: 1
  },
  {
    pergunta: "O curso Técnico em Logística do SENAI ensina principalmente sobre:",
    opcoes: [
        "Controle de estoque e distribuição", 
        "Desenho técnico", 
        "Eletricidade residencial", 
        "Gestão hospitalar"
    ],
    correta: 0
  },
  {
    pergunta: "Qual curso é ideal para quem quer trabalhar com produção de roupas e acessórios?",
    opcoes: [
        "Técnico em Automação", 
        "Técnico em Vestuário",
        "Técnico em Química", 
        "Técnico em Redes"
    ],
    correta: 1
  },
  {
    pergunta: "O curso Técnico em Alimentos é voltado para:",
    opcoes: [
        "Criação de receitas", 
        "Processamento e controle de qualidade de alimentos", 
        "Nutrição clínica", 
        "Agricultura orgânica"
    ],
    correta: 1
  },
  {
    pergunta: "O curso Técnico em Automação Industrial prepara o aluno para:",
    opcoes: ["Criar aplicativos", 
        "Trabalhar com robôs e sistemas automatizados", 
        "Atuar em laboratórios químicos", 
        "Trabalhar como mecânico de motos"
    ],
    correta: 1
  },
  {
    pergunta: "Qual curso do SENAI envolve o uso de software CAD para desenho técnico?",
    opcoes: [
        "Técnico em Informática", 
        "Técnico em Eletromecânica", 
        "Técnico em Mecânica", 
        "Técnico em Administração"
    ],
    correta: 2
  },
  {
    pergunta: "O que é comum nos cursos do SENAI?",
    opcoes: [
        "Alta carga de teoria", 
        "Conteúdo voltado para vestibulares", 
        "Integração de teoria e prática", 
        "Aulas 100% online sem prática"
    ],
    correta: 2
  },
  {
    pergunta: "O SENAI oferece cursos de qual nível?",
    opcoes: [
        "Fundamental", 
        "Técnico e profissionalizante", 
        "Mestrado", 
        "Pós-doutorado"
    ],
    correta: 1
  },
  {
    pergunta: "Qual curso é ideal para quem quer programar sistemas industriais?",
    opcoes: ["Técnico em Desenvolvimento de Sistemas", "Técnico em Automação Industrial", "Técnico em Alimentos", "Técnico em Logística"],
    correta: 1
  },
  {
    pergunta: "O que o curso Técnico em Eletroeletrônica ensina?",
    opcoes: [
        "Somente eletricidade residencial", 
        "Somente robótica", 
        "Sistemas elétricos e eletrônicos", 
        "Somente informática básica"
    ],
    correta: 2
  },
  {
    pergunta: "A principal função do Técnico em Refrigeração e Climatização é:",
    opcoes: [
        "Projetar redes de computadores", 
        "Fazer manutenção de ar-condicionado e sistemas de refrigeração",
        "Criar conteúdo digital", 
        "Consertar motores automotivos"
    ],
    correta: 1
  },
  {
    pergunta: "O curso Técnico em Química prepara o aluno para:",
    opcoes: [
        "Montar computadores", 
        "Analisar substâncias químicas", 
        "Ensinar em escolas", 
        "Trabalhar com nutrição esportiva"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a carga horária média de um curso técnico no SENAI?",
    opcoes: [
        "40 horas", 
        "160 horas", 
        "800 a 1200 horas", 
        "3000 horas"
    ],
    correta: 2
  },
  {
    pergunta: "Qual curso técnico trabalha diretamente com controle de qualidade?",
    opcoes: [
        "Técnico em Química", 
        "Técnico em Segurança do Trabalho", 
        "Técnico em Mecânica", 
        "Todos os anteriores"
    ],
    correta: 3
  },
  {
    pergunta: "Um Técnico em Segurança do Trabalho é responsável por:",
    opcoes: [
        "Instalar redes", 
        "Proteger trabalhadores e prevenir acidentes", 
        "Cuidar da produção de alimentos", 
        "Ensinar primeiros socorros"
    ],
    correta: 1
  },
  {
    pergunta: "O curso Técnico em Desenvolvimento de Sistemas ensina:",
    opcoes: [
        "Programação e criação de software", 
        "Técnicas de enfermagem", 
        "Produção industrial", 
        "Segurança alimentar"
    ],
    correta: 0
  },
  {
    pergunta: "No SENAI, o curso Técnico em Informática abrange:",
    opcoes: [
        "Somente Word e Excel", 
        "Montagem de computadores e redes", 
        "Programação, redes e suporte técnico", 
        "Somente digitação"
    ],
    correta: 2
  },
  {
    pergunta: "Cursos técnicos do SENAI preparam para o mercado de trabalho:",
    opcoes: [
        "Somente teórico", 
        "Somente artístico", 
        "Com foco prático e profissionalizante", 
        "Sem prática alguma"
    ],
    correta: 2
  },
  {
    pergunta: "O SENAI oferece certificados de:",
    opcoes: [
        "Pós-graduação", 
        "Mestrado", 
        "Cursos técnicos e profissionalizantes", 
        "Ensino médio completo"
    ],
    correta: 2
  },
  {
    pergunta: "Qual área pertence ao curso Técnico em Eletromecânica?",
    opcoes: [
        "Moda", 
        "Tecnologia da Informação", 
        "Saúde", 
        "Indústria"
    ],
    correta: 3
  },
  {
    pergunta: "Quem se forma no curso Técnico em Edificações pode atuar em:",
    opcoes: [
        "Redes de computadores", 
        "Canteiros de obras", 
        "Laboratórios químicos", 
        "Hospitais"
    ],
    correta: 1
  },
  {
    pergunta: "Qual curso do SENAI é voltado para o controle de processos produtivos?",
    opcoes: [
        "Técnico em Mecânica", 
        "Técnico em Química", 
        "Técnico em Automação", 
        "Técnico em Controle de Produção"
    ],
    correta: 3
  },
  {
    pergunta: "O curso Técnico em Logística estuda:",
    opcoes: [
        "Armazenagem, transporte e distribuição", 
        "Nutrição e dietas", 
        "Instalações elétricas", 
        "Direito trabalhista"
    ],
    correta: 0
  },
  {
    pergunta: "O curso Técnico em Administração é oferecido pelo:",
    opcoes: [
        "SENAC", 
        "SENAI", 
        "UNESCO", 
        "Prefeitura"
    ],
    correta: 1
  },
  {
    pergunta: "Qual desses cursos pode atuar em indústrias químicas?",
    opcoes: [
        "Técnico em Química", 
        "Técnico em Edificações", 
        "Técnico em Administração", 
        "Técnico em Informática"
    ],
    correta: 0
  },
  {
    pergunta: "Qual dos cursos abaixo é mais voltado para construção civil?",
    opcoes: [
        "Técnico em Edificações", 
        "Técnico em Logística", 
        "Técnico em Têxtil", 
        "Técnico em Biologia"
    ],
    correta: 0
  },
  {
    pergunta: "Para que serve o estágio nos cursos técnicos do SENAI?",
    opcoes: [
        "Ganhar dinheiro", 
        "Atender exigências legais", 
        "Complementar a formação prática", 
        "Conseguir um diploma universitário"
    ],
    correta: 2
  },
  {
    pergunta: "O curso Técnico em Têxtil prepara profissionais para:",
    opcoes: [
        "Trabalhar com tecidos e produção têxtil", 
        "Instalar redes", 
        "Realizar atendimento ao público", 
        "Analisar alimentos"
    ],
    correta: 0
  },
  {
    pergunta: "O curso Técnico em Metalurgia envolve:",
    opcoes: [
        "Estudo de metais e suas ligas", 
        "Nutrição clínica", 
        "Gestão de estoque", 
        "Programação web"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o principal objetivo dos cursos técnicos do SENAI?",
    opcoes: [
        "Passar em vestibulares", 
        "Educação artística", 
        "Inserção rápida no mercado de trabalho", 
        "Atuação na área de humanas"
    ],
    correta: 2
  },
  {
    pergunta: "Quem conclui um curso técnico pode atuar como:",
    opcoes: [
        "Engenheiro", 
        "Supervisor técnico", 
        "Professor universitário", 
        "Palestrante motivacional"
    ],
    correta: 1
  },
  {
    pergunta: "O curso Técnico em Redes de Computadores envolve:",
    opcoes: [
        "Montagem de móveis", 
        "Desenho arquitetônico", 
        "Instalação e configuração de redes", 
        "Cálculos financeiros"
    ],
    correta: 2
  },
  {
    pergunta: "Técnico em Plásticos é um curso voltado para:",
    opcoes: ["Indústria de embalagens e transformação de materiais", 
    "Publicidade", 
    "Ensino de matemática", 
    "Artes cênicas"
],
    correta: 0
  },
  {
    pergunta: "Técnico em Celulose e Papel é indicado para quem quer atuar em:",
    opcoes: [
        "Educação infantil", 
        "Indústria gráfica e de papel", 
        "Hospitais", 
        "Empresas de segurança"
    ],
    correta: 1
  },
  {
    pergunta: "Cursos técnicos do SENAI geralmente exigem escolaridade mínima de:",
    opcoes: [
        "Fundamental incompleto", 
        "Ensino médio completo ou em andamento", 
        "Ensino superior", 
        "Mestrado"
    ],
    correta: 1
  }
    ];


let perguntaAtual = 0;
let acertos = 0;
let erros = 0;
let respondeu = false;

let perguntasSelecionadas = [];

const telaInicial = document.getElementById("tela-inicial");
const telaQuiz = document.getElementById("tela-quiz");
const telaPontuacao = document.getElementById("pontuacao");

const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");
const botaoMostrar = document.getElementById("mostrar-resposta");
const botaoProxima = document.getElementById("proxima");
const barraProgresso = document.getElementById("barra");

const spanAcertos = document.getElementById("acertos");
const spanErros = document.getElementById("erros");

const statusAcertos = document.getElementById("status-acertos");
const statusErros   = document.getElementById("status-erros");

document.getElementById("iniciar-quiz").addEventListener("click", iniciarQuiz);
botaoProxima.addEventListener("click", proximaPergunta);
botaoMostrar.addEventListener("click", mostrarResposta);
document.getElementById("reiniciar").addEventListener("click", reiniciarQuiz);

// Função para embaralhar perguntas
function embaralhar(array) {
  return array.sort(() => Math.random() - 0.5);
}

function iniciarQuiz() {
  telaInicial.style.display = "none";
  telaQuiz.style.display = "block";
  perguntaAtual = 0;
  acertos = 0;
  erros = 0;

  // Seleciona 10 perguntas aleatórias
  perguntasSelecionadas = embaralhar([...perguntas]).slice(0, 10);

  carregarPergunta();
}

function carregarPergunta() {
  respondeu = false;
  const atual = perguntasSelecionadas[perguntaAtual];
  perguntaEl.textContent = atual.pergunta;
  opcoesEl.innerHTML = "";
  botaoMostrar.style.display = "none";
  botaoProxima.disabled = true;

  atual.opcoes.forEach((opcao, index) => {
    const botao = document.createElement("button");
    botao.textContent = opcao;
    botao.style.margin = "5px";
    botao.style.padding = "10px";
    botao.addEventListener("click", () => {
      if (!respondeu) {
        respondeu = true;
        botao.dataset.selecionado = "true";
        botaoMostrar.style.display = "inline";
      }
    });
    opcoesEl.appendChild(botao);
  });

  atualizarProgresso();
}

function mostrarResposta() {
  const atual = perguntasSelecionadas[perguntaAtual];
  const opcoes = opcoesEl.querySelectorAll("button");
  let selecionadoCorretamente = false;

  opcoes.forEach((btn, index) => {
    btn.disabled = true;
    if (index === atual.correta) {
      btn.style.backgroundColor = "green";
      btn.style.color = "white";
    } else {
      btn.style.backgroundColor = "red";
      btn.style.color = "white";
    }

    if (btn.dataset.selecionado === "true") {
      if (index === atual.correta) {
        selecionadoCorretamente = true;
      }
    }
  });

  if (selecionadoCorretamente) {
    acertos++;
  } else {
    erros++;
  }

  botaoMostrar.style.display = "none";
  botaoProxima.disabled = false;
}

function proximaPergunta() {
  perguntaAtual++;
  if (perguntaAtual < perguntasSelecionadas.length) {
    carregarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  telaQuiz.style.display = "none";
  telaPontuacao.style.display = "block";
  spanAcertos.textContent = acertos;
  spanErros.textContent = erros;
}

function reiniciarQuiz() {
  telaPontuacao.style.display = "none";
  telaInicial.style.display = "block";
}

function atualizarProgresso() {
  const progresso = ((perguntaAtual + 1) / perguntasSelecionadas.length) * 100;
  barraProgresso.style.width = progresso + "%";
}

