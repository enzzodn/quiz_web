// Perguntas e respostas
const questions = [
    {
        question: "O que é o HTML?",
        options: ["Linguagem de programação", "Linguagem de marcação", "Banco de dados", "Ferramenta de design"],
        correct: 1
    },
    {
        question: "O que o CSS é usado para?",
        options: ["Controlar o estilo visual da página", "Controlar a lógica de programação", "Armazenar dados", "Criar animações 3D"],
        correct: 0
    },
    {
        question: "Qual é a principal função do JavaScript?",
        options: ["Estilizar páginas", "Criar layouts responsivos", "Adicionar interatividade à página", "Gerenciar banco de dados"],
        correct: 2
    },
    {
        question: "Qual elemento HTML é usado para incluir uma imagem?",
        options: ["< img >", "< link >", "< div >", "< script >"],
        correct: 0
    },
    {
        question: "O que significa a sigla CSS?",
        options: ["Cascading Style Sheets", "Creative Style Sheets", "Coded Style Sheets", "Common Style Sheets"],
        correct: 0
    },
    {
        question: "Qual desses comandos é usado para declarar uma variável no JavaScript?",
        options: ["let", "var", "const", "todos os acima"],
        correct: 3
    },
    {
        question: "O que significa a sigla HTML?",
        options: ["Hyper Text Markup Language", "Hyper Tool Markup Language", "Hypertext Mode Layout", "Hot Text Machine Language"],
        correct: 0
    },
    {
        question: "Como se faz um comentário em JavaScript?",
        options: ["< !-- comentário -- >", "// comentário", "/* comentário */", "# comentário"],
        correct: 1
    },
    {
        question: "O que faz a propriedade 'display: flex' no CSS?",
        options: ["Organiza os itens de forma horizontal", "Organiza os itens de forma vertical", "Torna o layout flexível", "Ajusta o tamanho das fontes"],
        correct: 2
    },
    {
        question: "Qual a função do atributo 'src' no HTML?",
        options: ["Indicar o link de um recurso externo", "Indicar a origem de uma imagem ou arquivo", "Ajustar o estilo da página", "Controlar a largura da página"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const scoreDisplay = document.getElementById("score");

function loadQuestion() {
    const questionData = questions[currentQuestion];
    questionContainer.innerHTML = `
        <div class="question">${questionData.question}</div>
        <ul class="options">
            ${questionData.options.map((option, index) => 
                `<li onclick="selectOption(${index})">${option}</li>`
            ).join('')}
        </ul>
    `;
}

function selectOption(selectedIndex) {
    const options = document.querySelectorAll('.options li');
    options.forEach(option => option.classList.remove('selected'));
    options[selectedIndex].classList.add('selected');
}

function nextQuestion() {
    const selectedOption = document.querySelector('.options li.selected');
    if (!selectedOption) return; // Nenhuma opção selecionada

    const correctAnswer = questions[currentQuestion].correct;
    const selectedAnswerIndex = Array.from(selectedOption.parentElement.children).indexOf(selectedOption);

    if (selectedAnswerIndex === correctAnswer) {
        score++;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// MOSTRAR O RESULTADO DO QUIZ
function showResult() {
    questionContainer.style.display = "none";
    nextBtn.style.display = "none";
    resultContainer.style.display = "block";
    scoreDisplay.textContent = `Você acertou ${score} de ${questions.length} questões!`;
}

// RESTART DO QUIZ
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    questionContainer.style.display = "block";
    nextBtn.style.display = "block";
    resultContainer.style.display = "none";
    loadQuestion();
}

nextBtn.addEventListener("click", nextQuestion);

// INÍCIO DO QUIZ
loadQuestion();
