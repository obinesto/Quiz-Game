var questionBank = [
{
    question: 'Which club is the highest all-time UEFA champions league winner',
    option: ['Arsenal FC','FC Porto','Real Madrid FC','FC Bayern Munich'],
    answer: 'Real Madrid FC'
},
{
    question: 'Who is the current sitting President of Nigeria',
    option: ['David Mark','Peter Obi','Bola Tinubu','Aliko Dangote'],
    answer: 'Bola Tinubu'
},

{
    question: 'What is the capital of Germany',
    option: ['Bayern','Berlin','Hesse','Hamburg'],
    answer: 'Berlin'
},
{
    question: 'Which mountain is the highest in the world',
    option: ['k2','Kilimanjaro','Everest','Makalu'],
    answer: 'Everest'
}
]
// console.log (questionBank)
// console.log (questionBank.length)

var question = document.getElementById('question')
var opt = document.getElementById('opt')
var option0 = document.getElementById('option0')
var option1 = document.getElementById('option1')
var option2 = document.getElementById('option2')
var option3 = document.getElementById('option3')
var btnii = document.getElementById('btn2')
var btniii = document.getElementById('btn3')
var stat = document.querySelector('.stat')
var quiz = document.querySelector('.quiz-container')
var scoreBoard = document.querySelector('#scoreboard')
var AnwserBoard = document.querySelector('#AnwserBoard')
var i = 0
var timer = document.getElementById('timer')
var scoreInit = 0
var scores = document.querySelector('.score')
var olRenderAnwsers = document.getElementById('renderAnwsers')


function clock(){
    var date = new Date()
    var hours = date.getHours()
    var minute = date.getMinutes()
    var sec = date.getSeconds()
    timer.innerHTML = `${hours} : ${minute} : ${sec}`
    timer.style.color ='yellow'
    if(hours >= 12){
        timer.style.color = 'red'
    }
}
clock()
setInterval(clock,1000)

function displayQuestion(){
option0.innerHTML = questionBank[i].option[0]
option1.innerHTML = questionBank[i].option[1]
option2.innerHTML = questionBank[i].option[2]
option3.innerHTML = questionBank[i].option[3]
question.innerHTML = questionBank[i].question
stat.innerHTML =`Question ${i+1} of ${questionBank.length}`
}
displayQuestion()

function nextQuestion(){
if(i < questionBank.length -1)
    {
        i++
    displayQuestion()

    var options = document.querySelectorAll('.option')
        options.forEach( (option) =>{
            option.style.background = ""
        })
}
else{
    scoreBoard.style.display = 'block';
    
    scores.innerHTML = `Your score is ${scoreInit} out of ${questionBank.length}`
    scores.style.color = 'yellow'

    document.querySelector('.quiz-container').style.display = 'none'
}
}

function prevQuestion(){
if(i > 0)
    {
        i--
        displayQuestion()
    }
}

btnii.addEventListener('click',nextQuestion);
btniii.addEventListener('click',prevQuestion)


function calculateScore(clickedAnswer){
    
    if (clickedAnswer.innerHTML === questionBank[i].answer){
        scoreInit = scoreInit + 1
         
        document.getElementById(clickedAnswer.id).style.background='#5eef5e'
    } 
    else{
        document.getElementById(clickedAnswer.id).style.background = "burlywood"
    }
}


function BackToQuiz() {
    window.location.reload()
}



function CheckAnswer(){

scoreBoard.style.display = 'none'
AnwserBoard.style.display = 'block'

olRenderAnwsers.innerHTML= ''

for (num = 0; num < questionBank.length; num++){
    const Anwser = document.createElement('li')
    Anwser.innerHTML = questionBank[num].answer
    olRenderAnwsers.appendChild(Anwser)
}
}
