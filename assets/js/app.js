/*
  All are the best

  ^^ Code Start from Scratch ^^
  The Quiz by The EldasDEV | Shavkat Toshpulotov

  Github: https://github.com/eldasdev
  Telegram Channel: https://t.me/eldas
  Telegram Chat with for more codes and services
  https://t.me/eldasdev
  OR
  https://t.me/developershavkat

  Instagram: https://instagram.com/eldasdev.uz
  Twitter: https://twitter.com/eldasdev
*/

// Constants

const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const questionImage = document.querySelector(".question-image img");
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");

// Variables

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;

// push the questions into availableQuestions Array
function setAvailableQuestion() {
  const totalQuestion = quiz.length;
  for (let i = 0; i < totalQuestion; i++) {
    availableQuestions.push(quiz[i]);
  }
}

// set question number and question and options
function getNewQuestion() {
  // set question number
  questionNumber.innerHTML = `${quiz.length} dan ${questionCounter + 1}-savol`;

  // set question text
  // get random question
  const questionIndex =
    availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
  currentQuestion = questionIndex;
  questionText.innerHTML = currentQuestion.q;
  // describe the question image here
  questionImage.src = currentQuestion.img;
  // if your question don't have an image questionImg.src = null <img> tag won't be displayed 
  if (currentQuestion.img === '') {
    questionImage.style.display = "none";
  }
  // get the position of 'questionIndex' from the availableQuestion Array;
  const index1 = availableQuestions.indexOf(questionIndex);
  // remove the 'questionIndex' from the availableQuestion Array, so that the question does not repeat
  availableQuestions.splice(index1, 1);

  // set options
  // get the length of options
  const optionLen = currentQuestion.options.length;
  // push options into availableOptions Array
  for (let i = 0; i < optionLen; i++) {
    availableOptions.push(i);
  }

  optionContainer.innerHTML = "";
  let animationDelay = 0.2;
  // create options in html
  for (let i = 0; i < optionLen; i++) {
    // random option
    const optionIndex =
      availableOptions[Math.floor(Math.random() * availableOptions.length)];
    // get the position of 'optionIndex' from the availableOptions
    const index2 = availableOptions.indexOf(optionIndex);
    // remove the 'optionIndex' from the availableOptions, so that the option does not
    availableOptions.splice(index2, 1);
    const option = document.createElement("div");
    option.innerHTML = currentQuestion.options[i];
    option.id = i;
    option.style.animationDelay = animationDelay + "s";
    animationDelay = animationDelay + 0.15;
    option.className = "option";
    optionContainer.appendChild(option);
    option.setAttribute("onclick", "getResult(this)");
  }
  questionCounter++;
}

// get the result of current  attempt question
function getResult(element) {
  const id = parseInt(element.id);
  // get the answer by comparing the id of clicked option
  if (id === currentQuestion.answer) {
    // set the red color to the correct option
    element.classList.add("correct");
    // add the indicator to correct work
    updateAnswerIndicator("correct");
    correctAnswers++;
  } else {
    // set the red color to the incorrect option
    element.classList.add("wrong");
    // add the indicator to wrong work
    updateAnswerIndicator("wrong");

    // if the answer is incorrect the show the correct option by adding green color the correct option
    const optionLen = optionContainer.children.length;
    for (let i = 0; i < optionLen; i++) {
      if (parseInt(optionContainer.children[i].id) === currentQuestion.answer) {
        optionContainer.children[i].classList.add("correct");
      }
    }
  }

  attempt++;
  unclickableOptions();
}

// make all the options unclickable once the user select a option (RESTRICT THE USER TO CHANGE THE OPTION AGAIN)
function unclickableOptions() {
  const optionLen = optionContainer.children.length;
  for (let i = 0; i < optionLen; i++) {
    optionContainer.children[i].classList.add("already-answered");
  }
}

function answerIndicator() {
  answersIndicatorContainer.innerHTML = "";
  const totalQuestion = quiz.length;
  for (let i = 0; i < totalQuestion; i++) {
    const indicator = document.createElement("div");
    answersIndicatorContainer.appendChild(indicator);
  }
}

function updateAnswerIndicator(markType) {
  answersIndicatorContainer.children[questionCounter - 1].classList.add(
    markType
  );
}

function next() {
  if (questionCounter === quiz.length) {
    quizOver();
  } else {
    getNewQuestion();
  }
}

function quizOver() {
  // hide quiz quizBox
  quizBox.classList.add("hide");
  // show result resultBox
  resultBox.classList.remove("hide");
  quizResult();
}

// get the quiz Result
function quizResult() {
  resultBox.querySelector(".total-question").innerHTML = quiz.length;
  resultBox.querySelector(".total-attempt").innerHTML = attempt;
  resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
  resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;
  const percent = (correctAnswers / quiz.length) * 100;
  resultBox.querySelector(".percentage").innerHTML = percent.toFixed(2) + "%";
  resultBox.querySelector(".total-score").innerHTML =
    correctAnswers + " / " + quiz.length;
}

function resetQuiz() {
  questionCounter = 0;
  correctAnswers = 0;
  attempt = 0;
}

function tryAgainQuiz() {
  // hide the resultBox
  resultBox.classList.add("hide");
  // show the quizBox
  quizBox.classList.remove("hide");
  resetQuiz();
  startQuiz();
}

function goToHome() {
  // hide result Box
  resultBox.classList.add("hide");
  // show home Box
  homeBox.classList.remove("hide");
  resetQuiz();
}

// ##### STARTING POINT $$$$$

function startQuiz() {
  // hide home box
  homeBox.classList.add("hide");
  // show quiz Box
  quizBox.classList.remove("hide");
  // first we will set all questions in availableQuestions Array
  setAvailableQuestion();
  // second we will call getNewQuestion(); function
  getNewQuestion();
  // to create indicators of answers
  answerIndicator();
}

window.onload = function () {
  homeBox.querySelector(".total-question").innerHTML = quiz.length;
};

/*
  All are the best

  ^^ Code The End ^^
  The Quiz by The EldasDEV | Shavkat Toshpulotov

  Github: https://github.com/eldasdev
  Telegram Channel: https://t.me/eldas
  Telegram Chat with for more codes and services
  https://t.me/eldasdev
  OR
  https://t.me/developershavkat

  Instagram: https://instagram.com/eldasdev.uz
  Twitter: https://twitter.com/eldasdev
*/
