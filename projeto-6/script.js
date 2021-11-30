let currentQuestion = 0;
let totalQuestions = questions.length;
let correctAnswer = 0;

showQuestion(currentQuestion);
document
  .querySelector(".scoreArea button")
  .addEventListener("click", reloadQuiz);
function showQuestion(currentQuestion) {
  let question = questions[currentQuestion];

  if (question) {
    let pct = Math.floor((currentQuestion / totalQuestions) * 100);

    document.querySelector(".progress--bar").style.width = `${pct}%`;

    document.querySelector(".scoreArea").style.display = "none";
    document.querySelector(".questionArea").style.display = "block";
    document.querySelector(".question").innerHTML = question.question;

    let optionsHtml = "";

    for (let i in question.options) {
      optionsHtml += `<div data-op="${i}" class="option"><span>${
        parseInt(i) + 1
      }</span>${question.options[i]}</div>`;
    }

    document.querySelector(".options").innerHTML = optionsHtml;

    document.querySelectorAll(".options .option").forEach((item) => {
      item.addEventListener("click", optionClickEvent);
    });
  } else {
    finishQuiz();
  }
}

function optionClickEvent(e) {
  let selectedOption = parseInt(e.target.getAttribute("data-op"));
  if (questions[currentQuestion].answer === selectedOption) {
    correctAnswer++;
  }
  currentQuestion++;
  showQuestion(currentQuestion);
}

function finishQuiz() {
  let points = Math.floor((correctAnswer / totalQuestions) * 100);

  if (points < 30) {
    document.querySelector(".scoreText1").innerHTML = "Ta ruim em!";
    document.querySelector(".scorePct").style.color = "#ff0000";
  } else if (points >= 30 && points <= 70) {
    document.querySelector(".scoreText1").innerHTML = "Muito bom!";
    document.querySelector(".scorePct").style.color = "#fff000";
  } else if (points < 70) {
    document.querySelector(".scoreText1").innerHTML = "Parabéns!";
    document.querySelector(".scorePct").style.color = "#0d630d";
  }

  document.querySelector(".scorePct").innerHTML = `Acertou ${points}%`;

  document.querySelector(
    ".scoreText2"
  ).innerHTML = `Você respondeu ${totalQuestions} questões e acertou ${correctAnswer}.`;

  document.querySelector(".progress--bar").style.width = "100%";
  document.querySelector(".scoreArea").style.display = "block";
  document.querySelector(".questionArea").style.display = "none";
}

function reloadQuiz() {
  currentQuestion = 0;
  correctAnswer = 0;
  showQuestion(currentQuestion);
}
