var currentQuestion = 0;
var questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "London", correct: false },
            { text: "Berlin", correct: false }
        ]
    },
    {
        question: "What is the largest ocean in the world?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
            { text: "Indian Ocean", correct: false }
        ]
    },
    {
        question: "Who wrote the novel 'To Kill a Mockingbird'?",
        answers: [
            { text: "Ernest Hemingway", correct: false },
            { text: "F. Scott Fitzgerald", correct: false },
            { text: "Harper Lee", correct: true }
        ]
    }
];

function displayQuestion() {
    var questionTitle = document.getElementById("questionTitle");
    var questionText = document.getElementById("question");
    var quizForm = document.getElementById("quizForm");
    var feedback = document.getElementById("feedback");
    var nextButton = document.getElementById("nextButton");

    questionTitle.textContent = "Question " + (currentQuestion + 1);
    questionText.textContent = questions[currentQuestion].question;

    quizForm.innerHTML = "";

    questions[currentQuestion].answers.forEach(function(answer) {
        var radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "capital";
        radio.value = answer.text;
        radio.id = answer.text.toLowerCase();

        var label = document.createElement("label");
        label.setAttribute("for", answer.text.toLowerCase());
        label.textContent = answer.text;

        quizForm.appendChild(radio);
        quizForm.appendChild(label);
        quizForm.appendChild(document.createElement("br"));
    });

    quizForm.appendChild(document.createElement("input")).type = "submit";
    quizForm.appendChild(document.createElement("value")).value = "Submit";

    feedback.textContent = "";
    nextButton.style.display = "none";
}

document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var selectedAnswer = document.querySelector('input[name="capital"]:checked');

    if (selectedAnswer) {
        var isCorrect = questions[currentQuestion].answers.find(function(answer) {
            return answer.text === selectedAnswer.value;
        }).correct;

        var feedback = document.getElementById('feedback');
        var nextButton = document.getElementById('nextButton');

        if (isCorrect) {
            feedback.textContent = 'Correct!';
        } else {
            feedback.textContent = 'Incorrect. The correct answer is ' + questions[currentQuestion].answers.find(function(answer) { return answer.correct; }).text + '.';
        }

        nextButton.style.display = "inline";
    }
});

document.getElementById('nextButton').addEventListener('click', function() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    }
});

displayQuestion();