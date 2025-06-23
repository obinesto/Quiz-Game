import QuestionBank from "./Questions.js"

const questions = QuestionBank()

var quizContainer = document.querySelector('.quiz-container')
var scoreBoard = document.querySelector('#scoreboard')
var AnwserBoard = document.querySelector('#AnwserBoard')
var scores = document.querySelector('.score')
var olRenderAnwsers = document.getElementById('renderAnwsers')
let quizOptions = document.getElementById('options')
let i = 0
let filteredQuestions = []


// Timer
let timerInterval = null;
const timerDisplay = "03:00";
const timerDisplay2 = "00:00";
let quizTimer = document.getElementById('timer');
quizTimer.innerHTML = `<i class="fa-solid fa-stopwatch" style="color:white"></i>${timerDisplay}`
quizTimer.style.color = 'yellow';
function setTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    let seconds = 180;    
    timerInterval = setInterval(() => {
        seconds--;
        
        if (seconds === 0) {
            i = filteredQuestions.length
            nextQuestion()
            clearInterval(timerInterval);
            timerInterval = null;
            quizTimer.innerHTML = `<i class="fa-solid fa-stopwatch" style="color:white"></i>${timerDisplay2}`
            return;
        }
        
        const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        quizTimer.innerHTML = `<i class="fa-solid fa-stopwatch" style="color:white"></i>${mins}:${secs}`;
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
        quizTimer.innerHTML = `<i class="fa-solid fa-stopwatch" style="color:white"></i>${timerDisplay2}`
    }
}

function setCategory() {
    const selectElement = document.querySelector(".selectCategory")
    selectElement.innerHTML = '<option value="">Select a category</option>'
    const categoryData = [...new Set(questions.map(item => item.category))]
    // console.log("categoryData", categoryData)
    categoryData.forEach(category => {
        let optionElement = document.createElement("option")
        optionElement.label = category
        optionElement.value = category
        selectElement.append(optionElement)
    })
}
setCategory()

function selectCategory() {
    const selectValue = document.querySelector(".selectCategory").value
    filteredQuestions = questions
    .filter(item => item.category === selectValue)
    .map(q => ({...q, selectedOption: null, answered: false}))
    // console.log("filteredQuestions", filteredQuestions)
}
window.selectCategory = selectCategory


function startQuiz() {
    if (filteredQuestions.length === 0) {
        alert("kindly select a category")
        return
    }
    document.querySelector(".select-container").style.display = "none"
    document.querySelector(".case").style.display = "flex"
    displayQuestion()
    setTimer()
}
window.startQuiz = startQuiz

function displayQuestion() {
    if (filteredQuestions.length === 0) {
        return
    }
    let quizQuestion = document.getElementById('question')
    quizQuestion.innerText = `${filteredQuestions[i].question}`

    let quizStat = document.querySelector('.stat')
    quizStat.innerHTML = `Question ${i + 1} of ${filteredQuestions.length}`

    quizOptions.innerHTML = ""

    let optionsArray = filteredQuestions[i].options
    optionsArray.map(item => {
        let listElement = document.createElement("li")
        listElement.className = "option"
        listElement.innerHTML = item
        quizOptions.appendChild(listElement)
        // console.log("quizOptions:", quizOptions)

        if (filteredQuestions[i].anwsered){
            listElement.style.pointerEvents = "none"
             if (item === filteredQuestions[i].answer){
                listElement.style.background = "green"
            } else if (item === filteredQuestions[i].selectedOption){
                listElement.style.background = "red"
            } else{
                listElement.style.opacity = "0.7"
            }
        }
    })
    setupOptionClickHandlers()
}

function nextQuestion() {
    if (i < filteredQuestions.length - 1) {
        i++
        displayQuestion()
    }
    else {
        stopTimer()
        document.querySelector('.quiz-container').style.display = 'none'
        scoreBoard.style.display = 'block';
        scores.innerHTML = `Your score is ${calculateScore()} out of ${filteredQuestions.length}`
        scores.style.color = 'yellow'
    }
}
window.nextQuestion = nextQuestion;

function prevQuestion() {
    if (i > 0) {
        i--;
        displayQuestion();
    } else {
        return;
    }
}
window.prevQuestion = prevQuestion;

function handleOptionSelection(event) {
    const clickedOption = event.target
    const currentQuestion = filteredQuestions[i]

    if (!currentQuestion.answered) {
        if (clickedOption.textContent === currentQuestion.answer) {
            clickedOption.style.background = 'green'
        } else {
            clickedOption.style.background = 'red'
            Array.from(quizOptions.children).forEach(option => {
                if (option.textContent === currentQuestion.answer) {
                    option.style.background = "green"
                }
            })
        }
        currentQuestion.answered = true
        currentQuestion.selectedOption = clickedOption.textContent
        Array.from(quizOptions.children).forEach(option => {
            option.style.pointerEvents = "none"
        })
    }
}

async function setupOptionClickHandlers() {
    const options = await document.querySelectorAll(".option")
    options.forEach(option => {
        option.removeEventListener("click", handleOptionSelection)
        option.addEventListener("click", handleOptionSelection)
    })
}

function calculateScore(){
    const score = filteredQuestions.filter(q => q.answer === q.selectedOption)
    return score.length
}

function checkAnswers() {

    scoreBoard.style.display = 'none'
    AnwserBoard.style.display = 'block'

    olRenderAnwsers.innerHTML = ''

    for (let num = 0; num < filteredQuestions.length; num++) {
        const Anwser = document.createElement('li')
        Anwser.innerHTML = filteredQuestions[num].answer
        olRenderAnwsers.appendChild(Anwser)
    }
}
window.checkAnswers = checkAnswers


function backToQuiz() {
    window.location.reload()
}
window.backToQuiz = backToQuiz