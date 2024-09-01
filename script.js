document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-btn');
    const introSection = document.getElementById('intro');
    const questionsSection = document.getElementById('questions');
    const resultSection = document.getElementById('result');
    const questionText = document.getElementById('question-text');
    const answersDiv = document.getElementById('answers');
    const resultText = document.getElementById('result-text');
    const restartButton = document.getElementById('restart-btn');

    // Perguntas e respostas
    const questions = [
        {
            question: "Qual é o maior desafio para a IA no futuro?",
            answers: [
                { text: "Controle ético", result: "Você optou por um futuro onde as questões éticas são bem abordadas, mas a vigilância é intensa." },
                { text: "Desenvolvimento tecnológico", result: "Você escolheu um futuro com avanços tecnológicos rápidos, mas com poucos limites éticos." },
            ],
        },
        {
            question: "Como a IA deve interagir com a sociedade?",
            answers: [
                { text: "Como assistente de suporte", result: "Você escolheu um futuro onde a IA é uma ferramenta de suporte, ajudando nas tarefas diárias." },
                { text: "Como entidade autônoma", result: "Você optou por um futuro onde a IA atua de forma autônoma, tomando decisões independentes." },
            ],
        }
    ];

    let currentQuestionIndex = 0;

    function showQuestion(index) {
        const question = questions[index];
        questionText.textContent = question.question;
        answersDiv.innerHTML = '';

        question.answers.forEach((answer) => {
            const button = document.createElement('button');
            button.textContent = answer.text;
            button.addEventListener('click', () => {
                showResult(answer.result);
            });
            answersDiv.appendChild(button);
        });
    }

    function showResult(result) {
        introSection.style.display = 'none';
        questionsSection.style.display = 'none';
        resultSection.style.display = 'block';
        resultText.textContent = result;
    }

    function startGame() {
        introSection.style.display = 'none';
        questionsSection.style.display = 'block';
        showQuestion(currentQuestionIndex);
    }

    function restartGame() {
        resultSection.style.display = 'none';
        introSection.style.display = 'block';
        currentQuestionIndex = 0;
    }

    startButton.addEventListener('click', startGame);
    restartButton.addEventListener('click', restartGame);
});
