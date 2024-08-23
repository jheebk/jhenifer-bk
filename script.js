const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está começando a cultivar morangos em seu jardim e se depara com um novo tipo de fertilizante que promete melhorar a qualidade dos frutos. Qual é o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é arriscado!",
                afirmacao: "No início, você ficou preocupado com os possíveis efeitos adversos desse novo fertilizante."
            },
            {
                texto: "Isso é promissor!",
                afirmacao: "Você ficou animado para experimentar o fertilizante e ver como ele poderia melhorar a qualidade dos morangos."
            }
        ]
    },
    {
        enunciado: "Após aprender sobre esse novo fertilizante, seu instrutor de horticultura pede que você faça um relatório sobre o uso de fertilizantes na produção de morangos. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet para encontrar informações relevantes sobre fertilizantes e técnicas de cultivo de morangos, e explica de forma clara no relatório.",
                afirmacao: "Conseguiu utilizar as informações disponíveis na internet para criar um relatório detalhado e útil sobre o uso de fertilizantes."
            },
            {
                texto: "Escreve o relatório com base nas conversas que teve com colegas, algumas pesquisas na internet e seus conhecimentos prévios sobre cultivo de morangos.",
                afirmacao: "Sentiu que utilizar seus próprios recursos e experiências foi mais eficaz para escrever o relatório."
            }
        ]
    },
    {
        enunciado: "Depois de entregar o relatório, o instrutor organiza um debate para discutir os diferentes métodos de cultivo de morangos e o impacto dos fertilizantes. Como você se posiciona nesse debate?",
        alternativas: [
            {
                texto: "Defende a ideia de que o uso de fertilizantes pode aumentar a produtividade e melhorar a qualidade dos morangos, desde que utilizado corretamente.",
                afirmacao: "Acredita que o uso de fertilizantes é essencial para otimizar a produção e está disposto a compartilhar suas experiências para melhorar a prática do cultivo."
            },
            {
                texto: "Preocupa-se com o uso excessivo de fertilizantes e defende métodos mais naturais e sustentáveis de cultivo de morangos para proteger o meio ambiente.",
                afirmacao: "Sua preocupação com o impacto ambiental motivou você a promover práticas de cultivo mais ecológicas e a educar outros sobre alternativas sustentáveis."
            }
        ]
    },
    {
        enunciado: "Ao final do debate, você precisa criar um cartaz que represente suas ideias sobre o uso de fertilizantes no cultivo de morangos. E agora?",
        alternativas: [
            {
                texto: "Criar um cartaz usando uma ferramenta de design simples como o Paint.",
                afirmacao: "Percebeu que muitas pessoas não estão familiarizadas com ferramentas de design e decidiu compartilhar suas habilidades em design básico para iniciantes."
            },
            {
                texto: "Criar um cartaz usando um gerador de gráficos online.",
                afirmacao: "Facilitou o processo de criação do cartaz utilizando ferramentas digitais e agora pode ajudar outros a usar essas ferramentas para suas próprias apresentações."
            }
        ]
    },
    {
        enunciado: "Você e seu grupo têm um projeto sobre técnicas de cultivo de morangos para entregar na próxima semana. O progresso está um pouco atrasado, e uma pessoa do seu grupo decidiu usar informações de um gerador de conteúdo para completar o projeto. O problema é que o material está muito parecido com o que foi gerado pelo software. O que você faz?",
        alternativas: [
            {
                texto: "Usar o conteúdo gerado como está pode ser uma forma eficiente de completar o projeto, então não vê problema em utilizá-lo.",
                afirmacao: "Acabou dependendo muito de ferramentas automatizadas e agora sente que precisa de mais envolvimento pessoal em seus projetos."
            },
            {
                texto: "Embora as ferramentas digitais sejam úteis, é importante revisar o material e adicionar suas próprias observações para garantir que o projeto reflita suas ideias e conhecimento pessoal.",
                afirmacao: "Reconheceu que as ferramentas digitais são um bom ponto de partida, mas que o envolvimento pessoal e a revisão são cruciais para garantir a originalidade e a qualidade do projeto."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
