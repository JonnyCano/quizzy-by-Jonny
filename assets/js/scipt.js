// create the question variables and assign multiple choices and an answer
var questionCounter = 0
var currentScore = 0
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
var correctDisplayEl = document.querySelector("#message")
var showScoreEl = document.querySelector("input[name='highScore']")
var scoreBoardFormEl = document.querySelector("#scoreBoardForm")
var scoreFormScoreEl = document.querySelector("#theScore")
var scoreFormUserEl = document.querySelector("#userInitials")
var theHighScoreBoardContainer = document.querySelector(".the-scoreboard")
var theHighScoreBoard = document.querySelector("#the-scoreboard")
var theHighScoreBoardP = document.querySelector("#the-high-scoreboard-p")

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

var question5 = {
    Question: "In the git bash CLI, How do you link a local folder with a github repo you created?",
    Choices: ["git push", "git branch", "git init", "git prayer"],
    Answer: "git init"
}

var question6 = {
    Question: "What array method takes in a function as a parameter to execute on each element in the array?",
    Choices: ["map()", "sort()", "onEach()", "ofValue()"],
    Answer: "map()"
}

var question7 = {
    Question: "The 'for' attribute in the label form element links with this input attribute:",
    Choices: ["disbled", "id", "placeholder", "type"],
    Answer: "id"
}

var question8 = {
    Question: "What variable statement declares a block-scoped local variable optionally initializing it to a variable?",
    Choices: ["=>", "const", "var", "let"],
    Answer: "let"
}

var question9 = {
    Question: "What is the syntax to keep encoding from returning a buffer and also allows most characters and emojis?",
    Choices: ["sha256", "utf-8", "event", "BARCHAR"],
    Answer: "utf-8"
}

var question10 = {
    Question: "A string and array property method that checks to see if a string exists in an array",
    Choices: ["includes()", "isTypeOf()", "onEach()", "then()"],
    Answer: "includes()"
}

var question11 = {
    Question: "These are all form submissions that can go in the action attribute assignment request to the server except _______:",
    Choices: ["false", "relative path", "url", "website"],
    Answer: "false"
}

var question12 = {
    Question: "Form method:",
    Choices: ["get", "post", "put", "all of the above"],
    Answer: "all of the above"
}

var question13 = {
    Question: "The default css positon value of html documents",
    Choices: ["relative", "static", "sticky", "absolute"],
    Answer: "static"
}

var question14 = {
    Question: "Only when a git project team member _____ and _____ merge conflicts will a merge conflict truly be resolved.",
    Choices: ["fetch, commit", "type, push", "add, commit", "add, pull"],
    Answer: "add, commit"
}

var question15 = {
    Question: "In the CLI terminal, to execute all commands write them together on the same line, separated by:",
    Choices: [", / comma", ". / period", "# hash", "; / semicolon"],
    Answer: "; / semicolon"
}

// add the question objects the questions array
function addQuestions() {
    questions.push(question1)
    questions.push(question2)
    questions.push(question3)
    questions.push(question4)
    questions.push(question5)
    questions.push(question6)
    questions.push(question7)
    questions.push(question8)
    questions.push(question9)
    questions.push(question10)
    questions.push(question11)
    questions.push(question12)
    questions.push(question13)
    questions.push(question14)
    questions.push(question15)

    // call the funtion that begins the quiz
    quizzy()

    // set timer interval
    startTimer()
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
    const points = 10;

    // Check the current choice against the answer
    if (currentClickedChoice == answer) {
        correctDisplayEl.textContent = "CORRECT"
        currentScore = currentScore + points;
        console.log('current score: ' + currentScore);
    } else {
        correctDisplayEl.textContent = "INCORRECT " + answer
        timer = timer - points;
        console.log('timer: ' + timer);
    }
    questionCounter++
    quizzy()
}

// starts the timer in setInterval()
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
}

function startTimer() {
    var timerInterval = setInterval(function() {
        if (timer > 10) {
            console.trace
            displayTimer(timer)
            timer--
            console.log("oh my")
        }
        else if (timer <= 10 && timer > 0) {
            displayTimer(timer)
            timer--
            timerContainerEl.style.background = 'red'
            console.log("Oh no")
        }
        else {
            console.log("oh man oh geez oh WOW")
            quizQuestionContainer.style.none = "none"
            timer = Math.abs(0);
            displayTimer(timer)
            scoreBoardFormEl.style.display = "block"
            // timerContainerEl.textContent = 0
            // stop the interval function
            clearInterval(timerInterval)
            // call the end quiz function
            endQuiz()
        }
    }, 1000)
}

function endQuiz() {
    // end the timer in case out of questions in array
    timer = Math.abs(0)
    displayTimer(timer)
    // clearInterval(setInterval)
    var endQuizMessage = setInterval(function() {
        quizQuestionContainer.innerHTML = '<h2>' + "Let's see how you did!" + '</h2>'
        clearInterval(endQuizMessage)
    }, 2000)
    quizQuestionContainer.style.display = "none"
    showScoreEl.value = currentScore
    scoreFormScoreEl.textContent = currentScore
}

function getQuizStorage() {
    return JSON.parse(localStorage.getItem('theScoreBoard'))
}

function scoreBoardFormHandler(event) {
    event.preventDefault()

    const playerScore = showScoreEl.value
    const playerUsername = scoreFormUserEl.value

    let theScoreBoard = []

    let quizPlayerData = {
        score: playerScore,
        player: playerUsername
    }

    if (localStorage.getItem('theScoreBoard') == null) {
        localStorage.setItem('theScoreBoard', JSON.stringify(theScoreBoard))
    } else {
        theScoreBoard = getQuizStorage()
    }

    theScoreBoard.push(quizPlayerData)

    localStorage.setItem('theScoreBoard', JSON.stringify(theScoreBoard))

    viewHighScores()
}

function viewHighScores() {

    quizQuestionContainer.style.display = "none"
    scoreBoardFormEl.style.display = "none"
    theHighScoreBoardContainer.style.display = "block"

    theScoreBoard = getQuizStorage()

    theScoreBoard.sort(sortScores)

    function sortScores(a, b) {
        return b.score - a.score
    }

    let text = ""

    for (let i = 0; i < theScoreBoard.length; i++) {
        let count = 1
        text += count + ". " + theScoreBoard[i].player + " - " + theScoreBoard[i].score + "<br /><br />"
        count ++
    }

    theHighScoreBoardP.innerHTML = text
}

function removeTheScoreboard() {
    localStorage.removeItem('theScoreBoard')
}

// startBtn.onclick = addQuestions