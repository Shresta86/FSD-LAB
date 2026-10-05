const questions = [
    {
        question: "Which language is used to make web pages interactive?",
        options: ["HTML", "CSS", "JavaScript", "SQL"],
        answer: "JavaScript"
    },
    {
        question: "What does DOM stand for?",
        options: [
            "Document Object Model",
            "Data Object Model",
            "Digital Object Method",
            "Document Oriented Model"
        ],
        answer: "Document Object Model"
    },
    {
        question: "Which keyword declares a variable?",
        options: ["int", "var", "string", "define"],
        answer: "var"
    },
    {
        question: "Which method selects an element by ID?",
        options: ["getElementById()", "getElement()", "select()", "queryId()"],
        answer: "getElementById()"
    },
    {
        question: "Which event occurs when a button is clicked?",
        options: ["onchange", "onclick", "onload", "onhover"],
        answer: "onclick"
    },
    {
        question: "Which data type stores true or false?",
        options: ["String", "Number", "Boolean", "Array"],
        answer: "Boolean"
    },
    {
        question: "Which operator checks strict equality?",
        options: ["=", "==", "===", "!="],
        answer: "==="
    },
    {
        question: "Which method adds an item to an array?",
        options: ["push()", "pop()", "shift()", "add()"],
        answer: "push()"
    },
    {
        question: "Which method prints output in the console?",
        options: ["print()", "console.log()", "display()", "write()"],
        answer: "console.log()"
    },
    {
        question: "Which language is used to style web pages?",
        options: ["HTML", "CSS", "JavaScript", "Python"],
        answer: "CSS"
    }
];

let currentQuestion = 0;
let score = 0;
let time = 15;
let timer;

const question = document.getElementById("question");
const options = document.getElementById("options");
const timerDisplay = document.getElementById("timer");
const result = document.getElementById("result");

function loadQuestion() {
    clearInterval(timer);

    if (currentQuestion === questions.length) {
        question.textContent = "Quiz Completed!";
        options.innerHTML = "";
        timerDisplay.textContent = "";
        result.textContent = "Your Score: " + score + " / 10";
        return;
    }

    let q = questions[currentQuestion];

    question.textContent = q.question;
    options.innerHTML = "";

    q.options.forEach(function(option) {
        let button = document.createElement("button");

        button.textContent = option;
        button.className = "option";

        button.onclick = function() {
            if (option === q.answer) {
                score++;
            }

            currentQuestion++;
            loadQuestion();
        };

        options.appendChild(button);
    });

    time = 15;
    timerDisplay.textContent = "Time: " + time;

    timer = setInterval(function() {
        time--;
        timerDisplay.textContent = "Time: " + time;

        if (time === 0) {
            clearInterval(timer);
            currentQuestion++;
            loadQuestion();
        }
    }, 1000);
}

loadQuestion();