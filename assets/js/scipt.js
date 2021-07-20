// create the question variables and assign multiple choices and an answer
var questionCounter = 0
var timer = 30
var questions = []

var startBtn = document.querySelector('#start')
var quizQuestionContainer = document.querySelector('#quiz-question-container')
var questionTextContainer = document.querySelector('#question')
var timerContainerEl = document.querySelector('.timer')
var answerChoice1 = document.querySelector(".btn1")
var answerChoice2 = document.querySelector(".btn2")
var answerChoice3 = document.querySelector(".btn3")
var answerChoice4 = document.querySelector(".btn4")
var correctDisplayEl = document.querySelector('#message')

var question1 =  {
    Question: "What does \"HTML\" stand for?",
    Choices: ["Hyper Deficit Disorder", "Hypertext Markup Language", "Hard Trace Mail Length", "Heavy Trace Made Limit"],
    Answer: ["Hypertext Markup Language"]
}

var question2 = {
    Question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    Choices: ["JavaScript", "Terminal/Bash", "for loops", "console.log"],
    Answer: "console.log"
}

var question3 = {
    Question: "Arrays in JavaScript can be used to store ______.",
    Choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    Answer: "all of the above"
}

var question4 = {
    Question: "The condition in an if/else statement is enclosed with _______.",
    Choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    Answer: "parenthesis"
}

// add the question objects the questions array
function addQuestions() {
    questions.push(question1)
    questions.push(question2)
    questions.push(question3)
    questions.push(question4)

    // call the funtion that begins the quiz
    quizzy()
}

// display questions with choices
function displayTimer(timer) {
    timerContainerEl.textContent = timer
}

// take time away for wrong answers
function whenClicked(event) {
    // enter the data for current choice and answer
    const currentClickedChoice = event.target.textContent
    const answer = questions[questionCounter].Answer

    // Check the current choice against the answer
    if (currentClickedChoice == answer) {
        correctDisplayEl.textContent = "CORRECT"
    } else {
        correctDisplayEl.textContent = "INCORRECT " + answer
        timer -= 10
    }
    questionCounter++
    quizzy()
}

function quizzy() {

    // populate the questions and choices
    const question = questions[questionCounter].Question
    const choices = questions[questionCounter].Choices
    
    questionTextContainer.textContent = question
    answerChoice1.textContent = choices[0]
    answerChoice2.textContent = choices[1]
    answerChoice3.textContent = choices[2]
    answerChoice4.textContent = choices[3]

    // add event listener to buttons when clicked
    answerChoice1.addEventListener('click', whenClicked)
    answerChoice2.addEventListener('click', whenClicked)
    answerChoice3.addEventListener('click', whenClicked)
    answerChoice4.addEventListener('click', whenClicked)

    var timedQuiz = setInterval(function() {
        
            displayTimer(timer)
            
            if (timer > 10) {
                timer--
            }
            else if (timer <= 10 && timer > 0) {
                timerContainerEl.style.background = 'red'
                timer--
            }
            else if (timer === 0) {
                timerContainerEl.textContent = 0
                // stop the interval function
                clearInterval(timedQuiz)
                // call the end quiz function
                endQuiz()
            }
        
        
    }, 1000)
}

function endQuiz() {

    var quizOver = setInterval(function() {
        clearInterval(quizOver)

        quizQuestionContainer.innerHTML = '<h2>' + "Let's see how you did!" + '</h2>'

    }, 1000)
}

startBtn.onclick = addQuestions