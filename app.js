// Question
const questions = [
    {
        question: "Which tag is used to define a hyperlink in HTML?",
        option: ["<link>", "<a>", "<hlink>", "<href>"],
        currect: "<a>"
    },
    {
        question: "What is the correct HTML tag for inserting a line break?",
        option: ["<lb>", "<br>", "<break>", "<newline>"],
        currect: "<br>"
    },
    {
        question: "Which HTML tag is used for creating an unordered list?",
        option: ["<ol>", "<list>", "<ul>", "<unordered>"],
        currect: "<ul>"
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        option: ["class", "style", "css", "format"],
        currect: "style"
    },
    {
        question: "What does CSS stand for?",
        option: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
        currect: "Cascading Style Sheets"
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        option: ["color", "text-color", "font-color", "textColor"],
        currect: "color"
    },
    {
        question: "In CSS, what does the 'float' property do?",
        option: ["It aligns elements horizontally.", "It makes elements disappear.", "It creates floating elements in water.", "It positions elements absolutely."],
        currect: "It aligns elements horizontally."
    },
    {
        question: "What HTML tag is used to define an image?",
        option: ["<img>", "<image>", "<picture>", "<imgsrc>"],
        currect: "<img>"
    },
    {
        question: "What is the correct HTML for creating a checkbox?",
        option: ["<input type='check'>", "<input type='checkbox'>", "<checkbox>", "<check>"],
        currect: "<input type='checkbox'>"
    },
    {
        question: "What is the purpose of the HTML <meta> tag?",
        option: ["To define metadata about an HTML document", "To create a navigation menu", "To define a paragraph of text", "To insert images into the document"],
        currect: "To define metadata about an HTML document"
    }
];
// Question

let currentQuestion = 0;
let score = 0;
let quizPage = document.getElementById("quiz_page");
let studentName = document.getElementById("userName");
let question = document.getElementById("question");
let resultPage = document.getElementById("result_page");
let questionCount = document.getElementById("question_count");
let rigth = document.getElementById("right");
let quizStartTitle = document.getElementById("quizStartTitle")
let questionTitle = document.getElementById("questionTitle")
let quizEndTitle = document.getElementById("quizEndTitle")


// Next Page 
function nextPage() {
    if (studentName.value == "") {
        alert("Enter your Name First to start the Quiz");
    } else {
        quizStartTitle.style.display = "none";
        questionTitle.style.display = "block";
        quizPage.style.display = "none";
        question.style.display = "block";
        rigth.style.visibility = "visible";
        questionCount.style.visibility = "visible";

        loadfunction();
        updateQuestionCount();
    };
};
// Next Page


// Load Function
function loadfunction() {
    let mainContainer = document.getElementById("main_container");
    let currentQuestionObject = questions[currentQuestion];
    mainContainer.innerHTML = "";
    let questionPara = document.getElementById("quiz_question");
    // console.log(currentQuestionObject);
    // console.log(currentQuestionObject.option);
    questionPara.innerText = currentQuestionObject.question;

    for (let i = 0; i < currentQuestionObject.option.length; i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "q_option d-flex p-2 gap-2 align-items-center");
        let input = document.createElement("input");
        input.type = "radio";
        input.name = "select";
        input.value = currentQuestionObject.option[i];
        let label = document.createElement("label");
        label.innerText = currentQuestionObject.option[i];
        div.appendChild(input);
        div.appendChild(label);
        mainContainer.appendChild(div);
        question.appendChild(mainContainer);
    }
}
// Load Function

// Update the Question Count
function updateQuestionCount() {
    questionCount.innerText = `${currentQuestion + 1} / ${questions.length}`;
};

// Update the Question Count
function nextQuestion() {
    let selectCurrect = document.querySelector("input[name='select']:checked");
    // console.log(selectCurrect);
    if (selectCurrect == null) {
        alert('You need to Select the Option First to go through the Next Question');
    } else {
        if (selectCurrect.value == questions[currentQuestion].currect) {
            score++;
        }
        // console.log("Score incremented. New score:", score);
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadfunction();
            updateQuestionCount();
        } else {
            result();
        };
    };
};
// Update the Question Count

// Result function
function result() {
    questionTitle.style.display = "none";
    quizEndTitle.style.display = "block";
    question.style.display = "none";
    resultPage.style.display = "block"
    rigth.style.visibility = "hidden";
    let stdScore = document.getElementById("score");
    let stdResult = document.getElementById("stdResult");
    stdResult.innerText = studentName.value;
    stdScore.innerText = `Your score is ${score} / ${questions.length}`;
};
// Result function
