// Global variables to be used throughout the program.
let highScores = [];
let currentScore = 0;
let currentScoreMult = 0;
let score = 0;
let userInitials = "";
let time = 60;
let clockOperator = true;
let questionNum = 0;

// Question array containing question objects for each question.
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
    question: "Which of the following is not a correct way to define a function?",
    answer1: "function myFunction() {};",
    answer2: "let function = {myFunction}",
    answer3: "let myVariable = myFunction() {}",
    answer4: "let myObject = {key1: 'x', key2: 'y', key3: function myFunction(key1, key2) {}",
    correctAns: "answer2"
}, {
    question: "A for loop requires what to function correctly?",
    answer1: "beginning, middle, end",
    answer2: "start, while, quit",
    answer3: "the variable 'i'.",
    answer4: "initialization, stopping condition, iteration statement",
    correctAns: "answer4"
}, ""]

// Generates header on page load.
function generateHeader() {
    // Naming the variables for element creation.
    let scoreDiv = document.createElement("DIV");
    let headlineDiv = document.createElement("DIV");
    let timerDiv = document.createElement("DIV");
    // Setting element attributes.
    scoreDiv.innerHTML = "high scores";
    scoreDiv.id = "score"
    headlineDiv.id = "headline";
    timerDiv.innerHTML = "1:00";
    timerDiv.id = "timer";
    // Naming the container variable and creating the child elements within.
    let header = document.getElementById("header");
    header.appendChild(scoreDiv);
    header.appendChild(headlineDiv);
    header.appendChild(timerDiv);
    // Naming the child elements and setting their internal values.
    let headline = document.getElementById("headline");
    let quizLogo = document.createElement("h2");
    quizLogo.innerHTML = "JavaScript Coding Game";
    headline.appendChild(quizLogo);
    // Event listener for the high scores section.
    document.getElementById("score").addEventListener("click", function (event){event.preventDefault();registerScore();displayScores();});

}

// Generates welcome text on page load.
function generateWelcome() {
    // Creating the container div.
    let newDiv = document.createElement("DIV");
    newDiv.id = "welcome";
    main.appendChild(newDiv);
    // Creating the elements to be displayed in the welcome section.
    let welcome = document.getElementById("welcome");
    let newH3 = document.createElement("H3");
    newH3.innerHTML = "JavaScript Coding Game";
    let newP = document.createElement("P");
    newP.innerHTML = "Welcome to the coding quiz. The elements of this quiz are created dynamically using javascript. To play, click the 'begin game' button and answer the questions as quickly and accurately as you can.";
    let newButton = document.createElement("BUTTON");
    newButton.id = "startButton";
    newButton.innerHTML = "begin game";
    welcome.appendChild(newH3);
    welcome.appendChild(newP);
    welcome.appendChild(newButton);
    // Start button event listener.
    document.getElementById("startButton").addEventListener("click", function () {
    generateQuestion(questionNum);
    });

}

// Generates the questions as the user moves through the quiz.
function generateQuestion(questionNum) {
    // Handles clock operation; starts on first question only.
    if (time === 60 && clockOperator === true) {
        countDown();
    }
    // Removing previous content in the container.
    let main = document.getElementById("main");
    main.removeChild(main.childNodes[1]);
    // Creating the container for the question section.
    let questionDiv = document.createElement("DIV");
    questionDiv.id = "questionDiv";
    main.appendChild(questionDiv);
    // Creating the elements to be displayed in the question container.
    questionDiv = document.getElementById("questionDiv");
    let newH3 = document.createElement("H3");
    newH3.innerHTML = questions[questionNum].question;
    questionDiv.appendChild(newH3);
    // Generating the answer buttons that go with the corresponding question.
    for (let i = 0; i < 4; i++) {
        let x = "answer" + (1 + i);
        questionDiv.appendChild(document.createElement("button"));
        questionDiv.children[i + 1].setAttribute("id", "answer" + (1 + i));
        questionDiv.children[i + 1].innerHTML = questions[questionNum][x];
    }
    // Handling question scoring.
    let correctAnswer = questions[questionNum].correctAns;
    function scoreAndMoveOn(x) {
        if (correctAnswer == x) {
            currentScore += 5;
        } else {
            time -= 10;
        }
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
    // Event listeners for the individual question buttons.
    document.getElementById("answer1").addEventListener("click", function (event){event.preventDefault();scoreAndMoveOn("answer1");});
    document.getElementById("answer2").addEventListener("click", function (event){event.preventDefault();scoreAndMoveOn("answer2");});
    document.getElementById("answer3").addEventListener("click", function (event){event.preventDefault();scoreAndMoveOn("answer3");});
    document.getElementById("answer4").addEventListener("click", function (event){event.preventDefault();scoreAndMoveOn("answer4");});
    // Incrementing the question variable in order to move to the next question.
    questionNum++;
}

// Generates the user's quiz results and high score entry form.
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
    // Calling for the elements to be created on the page.
    results.appendChild(newH1);
    results.appendChild(newP);
    results.appendChild(newInputLabel);
    results.appendChild(newInput);
    results.appendChild(newButton);
    // Event listener for the user initials/score form.
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
}

// Displays the high scores stored on the local machine.
function displayScores() {
    scoreList = JSON.parse(localStorage.getItem("highScores"));
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
        newLi.innerHTML = `${i + 1}: ${highScores[i][1]} - ${highScores[i][0]}`;
        scoreLi.appendChild(newLi);
    }
    // Creating the play again button
    let newButton = document.createElement("BUTTON");
    newButton.id = "restartButton";
    newButton.innerHTML = "play again";
    scorePage.appendChild(newButton);
    // EVENT LISTENER FOR THE DISPLAY SCORES PAGE
    document.getElementById("restartButton").addEventListener("click", function () {
        clockOperator = true;
        time = 60;
        generateQuestion(questionNum);
        currentScore = 0;
    });
}

// Handles the countdown clock.
function countDown() {
    let countSpan = document.getElementById("timer");
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

// Registers and logs the scores to the local machine.
function registerScore() {
    if (localStorage.getItem("highScores") === null) {
        highScores = [[0, "aaa"], [0, "aaa"], [0, "aaa"], [0, "aaa"], [0, "aaa"]];
    } else {
        highScores = JSON.parse(localStorage.getItem("highScores"));
    }
    console.log(highScores);
    function sortScores() {
        let x = highScores.sort(function(a, b){return b - a;});
        highScores = x;
    }
    sortScores();
    console.log(highScores);
    for (let i = 0; i < highScores.length; i++) {
        if (score > highScores[i][0]) {
            highScores.pop();
            highScores.push([score, userInitials]);
            x = highScores.sort();
            highScores = x.reverse();
            break;
        }    
    }
    //highScores = localScores.reverse();
    localStorage.setItem("highScores", JSON.stringify(highScores));
}

// Calls for the initial page elements to be displayed.
generateHeader();
generateWelcome();
