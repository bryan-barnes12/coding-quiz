let highScores = [["init", "bmb", "score", "0"]];
let currentScore = ["", "", "", ""];
//let id = setInterval(reduceTime, 1000);

let welcomeText = "Welcome to the coding game. This is the game. This is how to play. Click the button below to begin.";
let resultsText = "You did this well...";
var time = 60;

const questions = [{
    question: "What is the airspeed of an African Swallow",
    answer1: "1.21 Gigawatts",
    answer2: "42",
    answer3: "Laden, or unladen?",
    answer4: "Blue",
    correctAns: "answer3"
}, {
    question: "Blah Blah Blah",
    answer1: "answer 1",
    answer2: "answer 2",
    answer3: "answer 3",
    answer4: "answer 4",
    correctAns: "answer3"
}, {
    question: "Third question",
    answer1: "answer 1",
    answer2: "answer 2",
    answer3: "answer 3",
    answer4: "answer 4",
    correctAns: "answer3"
}, {
    question: "Fourth Question",
    answer1: "answer 1",
    answer2: "answer 2",
    answer3: "answer 3",
    answer4: "answer 4",
    correctAns: "answer3"
}, {
    question: "Last question",
    answer1: "answer 1",
    answer2: "answer 2",
    answer3: "answer 3",
    answer4: "answer 4",
    correctAns: "answer3"
}, ""]
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
        main.removeChild(main.childNodes[0]);
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
function generateResults() {
    time = 60;
    let main = document.getElementById("main");
    main.removeChild(main.childNodes[1]);
    let newDiv = document.createElement("DIV");
    newDiv.id = "results";
    main.appendChild(newDiv);
    let results = document.getElementById("results");
    let newH1 = document.createElement("H1");
    newH1.innerHTML = "Results"
    let newP = document.createElement("P");
    newP.innerHTML = resultsText;
    let newButton = document.createElement("BUTTON");
    newButton.id = "startButton";
    newButton.innerHTML = "begin game";
    results.appendChild(newH1);
    results.appendChild(newP);
    results.appendChild(newButton);
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
    questionDiv.appendChild(newH3);
    for (let i = 0; i < 4; i++) {
        let x = "answer" + (1 + i);
        questionDiv.appendChild(document.createElement("button"));
        questionDiv.children[i + 1].setAttribute("id", "answer" + (1 + i));
        questionDiv.children[i + 1].innerHTML = questions[questionNum][x];
    }
    
    questionNum++;
    let correctAnswer = questions[questionNum].correctAns;
    console.log(questionNum);
    document.getElementById("answer1").addEventListener("click", function () {
        if (correctAnswer == "answer1") {
            currentScore[3] += 5;
        } else {
            time -= 10;
        }
        if (questionNum < 5) {
            generateQuestion(questionNum);
        } else {
            generateResults();
        }
    });
    document.getElementById("answer2").addEventListener("click", function () {
        if (correctAnswer == "answer2") {
            alert("Well done!");
        } else {
            alert("Oops!");
            time -= 10;
        }
        if (questionNum < 5) {
            generateQuestion(questionNum);
        } else {
            return;
        }
    });
    document.getElementById("answer3").addEventListener("click", function () {
        if (correctAnswer == "answer3") {
            alert("Well done!");
        } else {
            alert("Oops!");
            time -= 10;
        }
        if (questionNum < 5) {
            generateQuestion(questionNum);
        } else {
            return;
        }
    });
    document.getElementById("answer4").addEventListener("click", function () {
        if (correctAnswer == "answer4") {
            alert("Well done!");
        } else {
            alert("Oops!");
            time -= 10;
        }
        if (questionNum < 5) {
            generateQuestion(questionNum);
        } else {
            return;
        }
    });



}

function replaceMain() {
    let mainDiv = document.getElementById("main");
    mainDiv.innerHTML = "different (for sure different) test";
}
function countDown() {
    var countSpan = document.getElementById("timer");
    let id = setInterval(reduceTime, 1000);
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

