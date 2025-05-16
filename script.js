let current = 0;
let score = 0;

const questionBox = document.getElementById("question-box");
const optionsBox = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const result = document.getElementById("result");
const questionsData = document.getElementById("questions-data").children;

function loadQuestion() {
  const questionElement = questionsData[current];
  const questionText = questionElement.getAttribute("data-question");
  const questionType = questionElement.getAttribute("data-type");
  const answer = questionElement.getAttribute("data-answer").split(',');

  questionBox.querySelector("p").textContent = questionText;
  optionsBox.innerHTML = "";
  document.getElementById("fill-answer").style.display = "none";

  if (questionType === "single") {
    const options = questionElement.querySelectorAll("label");
    options.forEach(option => {
      optionsBox.appendChild(option);
    });
  } else if (questionType === "multi") {
    const options = questionElement.querySelectorAll("label");
    options.forEach(option => {
      optionsBox.appendChild(option);
    });
  } else if (questionType === "fill") {
    document.getElementById("fill-answer").style.display = "block";
  }

  nextBtn.onclick = () => {
    let correct = false;

    if (questionType === "single") {
      const selected = document.querySelector(`input[name="q${current+1}"]:checked`);
      if (selected && selected.value === answer[0]) correct = true;
    } else if (questionType === "multi") {
      const selected = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(c => c.value);
      if (selected.length === answer.length && selected.every(val => answer.includes(val))) {
        correct = true;
      }
    } else if (questionType === "fill") {
      const ans = document.getElementById("fill-answer").value.trim().toLowerCase();
      if (ans === answer[0].toLowerCase()) correct = true;
    }

    if (correct) score++;

    current++;
    if (current < questionsData.length) {
      loadQuestion();
    } else {
      questionBox.style.display = "none";
      nextBtn.style.display = "none";
      result.textContent = `You scored ${score} out of ${questionsData.length}`;
    }
  };
}

loadQuestion();
