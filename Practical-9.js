// Variables
let currentQuestionIndex = 0;
let score = 0;

// Array of quiz questions (Objects) using a Class
class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
}

const questions = [
  new Question(
    "What is the capital of France?",
    ["Paris", "London", "Rome", "Berlin"],
    "Paris"
  ),
  new Question("What is 2 + 2?", ["3", "4", "5", "6"], "4"),
  new Question(
    "Which planet is known as the Red Planet?",
    ["Earth", "Mars", "Jupiter", "Saturn"],
    "Mars"
  ),
];

// Functions
function displayQuestion() {
  if (currentQuestionIndex < questions.length) {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").textContent = question.text;

    const answersList = document.getElementById("answers");
    answersList.innerHTML = "";

    question.choices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => selectAnswer(choice)); // Event handling
      answersList.appendChild(li);
    });
  } else {
    showScore();
  }
}

function selectAnswer(selectedAnswer) {
  const question = questions[currentQuestionIndex];

  // Condition to check if the answer is correct
  if (selectedAnswer === question.answer) {
    score++;
  }

  currentQuestionIndex++;
  displayQuestion();
}

function submitAnswer() {
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    showScore();
  }
}

// Loop through questions to calculate and display the final score
function showScore() {
  document.getElementById(
    "quiz-container"
  ).innerHTML = `<h2>Your Score: ${score} out of ${questions.length}</h2>`;
}

// Initialize the quiz by displaying the first question
displayQuestion();
