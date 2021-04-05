let highScores = [["init", "bmb", "score", "0"]];
let currentScore = [];
function generateHeader() {
    var scoreDiv = document.createElement("DIV");
    var headlineDiv = document.createElement("DIV");
    var timerDiv = document.createElement("DIV");
    scoreDiv.innerHTML = "TEST";
    scoreDiv.id = "score"
    headlineDiv.innerHTML = "Coding Quiz";
    headlineDiv.id = "headline";
    timerDiv.innerHTML = "TEST";
    timerDiv.id = "timer";
    var test = document.getElementById("header");
    test.appendChild(scoreDiv);
    test.appendChild(headlineDiv);
    test.appendChild(timerDiv);
    console.log(test);
}
function generateMain() {
    var btn1 = document.createElement("DIV");
    btn1.innerHTML = "TEST";
    var test = document.getElementById("main");
    test.appendChild(btn1);
}
function replaceMain() {
    var btn1 = document.createElement("DIV");
    btn1.innerHTML = "different test";
    var test = document.getElementById("main");
    test.appendChild(btn1);
}
function countDown() {
    var countSpan = document.getElementById("timer");
    var time = 60;
    var id = setInterval(reduceTime, 1000);
    function reduceTime() {
      if (time == 0) {
        clearInterval(id);
      } else {
        time--; 
        countSpan.innerText = time; 
      }
    }
}








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
document.getElementById("test2").addEventListener("click", generateMain);
document.getElementById("test3").addEventListener("click", replaceMain);
document.getElementById("test4").addEventListener("click", displayScores);

