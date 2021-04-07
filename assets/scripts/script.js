let highScores = [[4, "aaa"], [1, "aaa"], [0, "aaa"], [3, "aaa"], [2, "aaa"]];
let currentScore = 0;
let currentScoreMult = 0;
let score = 0;
let userInitials = "";
//let id = setInterval(reduceTime, 1000);

let time = 60;
let clockOperator = true;
const questions = [{
    question: "Which of the following is a JavaScript primitive data type?",
    answer1: "String",
    answer2: "Yarn",
    answer3: "Rope",
    answer4: "Cord",
    correctAns: "answer1"
}, {
    question: "What does DOM stand for?",
    answer1: "Document Operator Modual",
    answer2: "Distinct Object Method",
    answer3: "Document Object Model",
    answer4: "Derivative of Obsolete Mechanism",
    correctAns: "answer3"
}, {
    question: "What is a valid way to call an event listener?",
    answer1: "Hey Siri, call an event listener.",
    answer2: "document.callEventListener('myButton')...",
    answer3: "target.addEventListener(type, listener);",
    answer4: "element",
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
let welcomeText = "Welcome to the coding quiz. The elements of this quiz are created dynamically using javascript. To play, click the 'begin game' button and answer the questions as quickly and accurately as you can.";
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
    newH3.innerHTML = "JavaScript Coding Game"
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
    // Removing the last element to fill the main section.
    let main = document.getElementById("main");
    main.removeChild(main.childNodes[1]);
    // Creating the new container for the results section.
    let newDiv = document.createElement("DIV");
    newDiv.id = "results";
    main.appendChild(newDiv);
    let results = document.getElementById("results");
    // Declaring the variables to be used in creating the results section.
    let newH1 = document.createElement("H1");
    let newP = document.createElement("P");
    let newInputLabel = document.createElement("label");
    let newInput = document.createElement("input");
    let newButton = document.createElement("BUTTON");
    // Setting the attributes for the new elements.
    newH1.innerHTML = "Results"
    newP.innerHTML = `You scored ${score} points.`;
    newInputLabel.innerHTML = "Initials:"
    newInput.id = "userInitials"
    newButton.id = "registerButton";
    newButton.innerHTML = "submit score";
    // Calling for the 
    results.appendChild(newH1);
    results.appendChild(newP);
    results.appendChild(newInputLabel);
    results.appendChild(newInput);
    results.appendChild(newButton);
    document.getElementById("registerButton").addEventListener("click", function () {
        clockOperator = true;
        time = 60;
        userInitials = document.getElementById("userInitials").value;
        registerScore();
        displayScores();
        currentScore = 0;
    });
    document.getElementById("timer").innerHTML = "1:00";
    questionNum = 0;
    document.getElementById("score").innerHTML = currentScore;
}

function generateQuestion(questionNum) {
    if (time === 60 && clockOperator === true) {
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
    
    let correctAnswer = questions[questionNum].correctAns;
    function scoreAndMoveOn(x) {
        if (correctAnswer == x) {
            currentScore += 5;
        } else {
            time -= 10;
        }
        document.getElementById("score").innerHTML = currentScore;
        if (questionNum < 5) {
            generateQuestion(questionNum);
        } else {
            currentScoreMult = Math.floor(time / 6);
            score = currentScore * currentScoreMult;
            console.clear();
            console.log(score);
            generateResults();
            clockOperator = false;
        }
    }

    console.log(questionNum);
    document.getElementById("answer1").addEventListener("click", function (event){event.preventDefault();scoreAndMoveOn("answer1");});
    document.getElementById("answer2").addEventListener("click", function (event){event.preventDefault();scoreAndMoveOn("answer2");});
    document.getElementById("answer3").addEventListener("click", function (event){event.preventDefault();scoreAndMoveOn("answer3");});
    document.getElementById("answer4").addEventListener("click", function (event){event.preventDefault();scoreAndMoveOn("answer4");});
    questionNum++;
}

function countDown() {
    var countSpan = document.getElementById("timer");
    let id = setInterval(reduceTime, 1000);
    function reduceTime() {
      if (time == 0 || clockOperator == false) {
        clearInterval(id);
        generateResults();
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
    let localScores = highScores.reverse();
    for (let i = 0; i < highScores.length; i++) {
        if (score > localScores[i][0]) {
            localScores.pop();
            console.log(localScores);
            localScores.push([score, userInitials]);
            console.log(localScores);
            break;
        }    
    }
    highScores = localScores.reverse();
    localStorage.setItem("highScores", JSON.stringify(highScores));
}
function displayScores() {
    scoreList = JSON.parse(localStorage.getItem("highScores"));
    console.log(scoreList);
    let main = document.getElementById("main");
    main.removeChild(main.childNodes[1]);
    // create the high score div.
    let newDiv = document.createElement("DIV");
    newDiv.id = "highScores";
    main.appendChild(newDiv);
    let scorePage = document.getElementById("highScores");
    // create the high score ul.
    let newUl = document.createElement("ul");
    newUl.id = "scoreList"
    scorePage.appendChild(newUl);
    let scoreLi = document.getElementById("scoreList");
    // create the list elements.
    for (let i = 0; i < highScores.length; i++) {
        let newLi = document.createElement("li");
        newLi.innerHTML = highScores[i];
        scoreLi.appendChild(newLi);
    }
    let newButton = document.createElement("BUTTON");
    newButton.id = "restartButton";
    newButton.innerHTML = "play again";
    // Calling for the 
    scorePage.appendChild(newButton);
    // EVENT LISTENER FOR THE DISPLAY SCORES PAGE
    document.getElementById("restartButton").addEventListener("click", function () {
        clockOperator = true;
        time = 60;
        generateQuestion(questionNum);
        currentScore = 0;
    });

}
