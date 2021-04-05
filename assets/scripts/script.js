let highScores = [["init", "bmb", "score", "0"]];
let currentScore = [];
let welcomeText = "Welcome to the coding game. This is the game. This is how to play. Click the button below to begin.";
var time = 60;

const questions = [{question: "question 1", "answer1": "answer 1", "answer2": "answer 2", "answer3": "answer 3", "answer4": "answer 4", "correctAns": "answer3"}, {"question": "question 2", "answer1": "answer 1", "answer2": "answer 2", "answer3": "answer 3", "answer4": "answer 4", "correctAns": "answer3"}, {"question": "question 3", "answer1": "answer 1", "answer2": "answer 2", "answer3": "answer 3", "answer4": "answer 4", "correctAns": "answer3"}]
let questionNum = 0;
console.log(questions[questionNum]);
function generateHeader() {
    let scoreDiv = document.createElement("DIV");
    let headlineDiv = document.createElement("DIV");
    let timerDiv = document.createElement("DIV");
    scoreDiv.innerHTML = "TEST";
    scoreDiv.id = "score"
    headlineDiv.innerHTML = "Coding Quiz";
    headlineDiv.id = "headline";
    timerDiv.innerHTML = "1:00";
    timerDiv.id = "timer";
    let header = document.getElementById("header");
    header.appendChild(scoreDiv);
    header.appendChild(headlineDiv);
    header.appendChild(timerDiv);
    console.log(header);
}
function generateWelcome() {
    let main = document.getElementById("main");
    if (questionNum !== 0) {
        main.removeChild(main.childNodes[1]);
    }
    let newDiv = document.createElement("DIV");
    newDiv.id = "welcome";
    main.appendChild(newDiv);
    let welcome = document.getElementById("welcome");
    let newH3 = document.createElement("H3");
    newH3.innerHTML = "javaScript Coding Game"
    let newP = document.createElement("P");
    newP.innerHTML = welcomeText;
    let newButton = document.createElement("BUTTON");
    newButton.id = "startButton";
    newButton.innerHTML = "begin game";
    welcome.appendChild(newH3);
    welcome.appendChild(newP);
    welcome.appendChild(newButton);
    console.log(main);
    document.getElementById("startButton").addEventListener("click", function () {
        generateQuestion(questionNum);
    });

}

function generateQuestion(questionNum) {
    if (time === 60) {
        countDown();
    }
    let main = document.getElementById("main");
    main.removeChild(main.childNodes[1]);
    let questionDiv = document.createElement("DIV");
    questionDiv.id = "questionDiv";
    main.appendChild(questionDiv);
    questionDiv = document.getElementById("questionDiv");

    let newH3 = document.createElement("H3");
    newH3.innerHTML = questions[questionNum].question;
    // let newP = document.createElement("P");
    // newP.innerHTML = welcomeText;
    // let newButton = document.createElement("BUTTON");
    // newButton.id = "startButton";
    // newButton.innerHTML = "begin game";
    questionDiv.appendChild(newH3);
    // welcome.appendChild(newP);
    // welcome.appendChild(newButton);
    console.log(main);
    // document.getElementById("startButton").addEventListener("click", generateQuestion);




    questionNum++;
}

function replaceMain() {
    let mainDiv = document.getElementById("main");
    mainDiv.innerHTML = "different (for sure different) test";
}
function countDown() {
    var countSpan = document.getElementById("timer");
    var id = setInterval(reduceTime, 1000);
    function reduceTime() {
      if (time == 0) {
        clearInterval(id);
      } else {
          if (time > 10) {
            time--; 
            countSpan.innerText = `0:${time}`; 
          } else {
            time--; 
            countSpan.innerText = `0:0${time}`; 
    
          }
      }
    }
}

generateHeader();
generateWelcome();






function registerScore() {
    localStorage.setItem("highScores", JSON.stringify(highScores));
}
registerScore();
function displayScores() {
    scoreList = JSON.parse(localStorage.getItem("highScores"));
    document.getElementById("score").innerHTML = scoreList[0][1] + scoreList[0][3];
//    document.getElementById("score").innerHTML = scoreList[0][3];
}

document.getElementById("test1").addEventListener("click", function () {
    generateHeader();
    countDown();
});
// document.getElementById("startButton").addEventListener("click", function () {
//     generateHeader();
//     countDown();
//     generateQuestion();
// });
document.getElementById("test2").addEventListener("click", generateWelcome);
document.getElementById("test3").addEventListener("click", generateQuestion);
document.getElementById("test4").addEventListener("click", displayScores);
// document.getElementById("main").addEventListener("load", function () {
//     generateHeader();
//     generateWelcome();
// });
