const quizData = [
    {
        question: "How many carrom men are there in total on a standard carrom board at the start of a game?",
        options: ["19", "18", "16", "20"],
        correct: "18"
    },
    {
        question: "What is the color of the queen in Carrom?",
        options: ["Red", "Black", "White", "Blue"],
        correct: "Red"
    },
    {
        question: "How many points is the queen worth if it is covered?",
        options: ["2 points", "3 points", "5 points", "10 points"],
        correct: "5 points"
    },
    {
        question: "What is the name of the piece used to strike the carrom men?",
        options: ["Striker", "Shooter", "Puck", "Disk"],
        correct: "Striker"
    },
    {
        question: "Which of the following is NOT a common rule in Carrom?",
        options: [
            "The striker must be flicked with one finger.",
            "Players take turns to strike.",
            "The queen can be pocketed at any time without being covered.",
            "If a player pockets the striker, it's a foul."
        ],
        correct: "The queen can be pocketed at any time without being covered."
    },
    {
        question: "In Carrom, what is the penalty for pocketing the striker?",
        options: ["Loss of turn", "Deduction of one carrom man", "Both A and B", "No penalty"],
        correct: "Both A and B"
    },
    {
        question: "How many carrom men does each player get at the beginning of the game in doubles?",
        options: ["8", "9", "7", "6"],
        correct: "9"
    },
    {
        question: "What is the diameter of a standard carrom striker?",
        options: ["3.18 cm", "4.13 cm", "5.08 cm", "6.35 cm"],
        correct: "4.13 cm"
    },
    {
        question: "What is the purpose of carrom powder?",
        options: [
            "To improve the shine of the board",
            "To reduce friction for smoother strikes",
            "To mark the positions of carrom men",
            "To decorate the board"
        ],
        correct: "To reduce friction for smoother strikes"
    },
    {
        question: "Which carrom piece must be pocketed last to win the game?",
        options: [
            "Any piece",
            "The striker",
            "The queen",
            "The last remaining carrom man of the player"
        ],
        correct: "The last remaining carrom man of the player"
    }
];

let userAnswers = [];

function loadQuiz() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';
    
    quizData.forEach((data, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        
        const questionTitle = document.createElement('h3');
        questionTitle.textContent = `Q${index + 1}: ${data.question}`;
        questionElement.appendChild(questionTitle);
        
        data.options.forEach(option => {
            const optionButton = document.createElement('button');
            optionButton.classList.add('option');
            optionButton.textContent = option;
            optionButton.onclick = () => selectOption(index, option);
            questionElement.appendChild(optionButton);
        });
        
        quizContainer.appendChild(questionElement);
    });
}

function selectOption(questionIndex, option) {
    userAnswers[questionIndex] = option;

    // Remove 'selected' class from all options of the current question
    const questionElement = document.getElementsByClassName('question')[questionIndex];
    const optionButtons = questionElement.getElementsByClassName('option');
    for (let button of optionButtons) {
        button.classList.remove('selected');
    }

    // Add 'selected' class to the clicked option
    const selectedButton = [...optionButtons].find(button => button.textContent === option);
    selectedButton.classList.add('selected');

    console.log(`Question ${questionIndex + 1} selected: ${option}`);
}

function submitQuiz() {
    let score = 0;
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    quizData.forEach((data, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = data.correct;
        const resultElement = document.createElement('div');
        
        if (userAnswer === correctAnswer) {
            score++;
            resultElement.textContent = `Question ${index + 1}: Correct!`;
            resultElement.style.color = 'green';
        } else {
            resultElement.textContent = `Question ${index + 1}: Incorrect. Your answer: ${userAnswer || 'No answer'} - Correct answer: ${correctAnswer}`;
            resultElement.style.color = 'red';
        }
        
        resultsContainer.appendChild(resultElement);
    });

    const scoreElement = document.createElement('div');
    scoreElement.textContent = `You scored ${score} out of ${quizData.length}`;
    resultsContainer.appendChild(scoreElement);
}

window.onload = loadQuiz;
