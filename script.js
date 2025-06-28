const quizData = [
  { question: "011~016", answer: "北海道" },
  { question: "017", answer: "青森" },
  { question: "018", answer: "秋田" },
  { question: "019" , answer: "岩手"},
  { question: "022" , answer: "宮城"},
  { question: "023" , answer: "山形"},
  { question: "024" , answer: "福島"},
  { question: "025" , answer: "新潟"},
  { question: "026" , answer: "長野"},
  { question: "027" , answer: "群馬"},
  { question: "028" , answer: "栃木"},
  { question: "029" , answer: "茨城"},
  { question: "042" , answer: "東京"},
  { question: "043,047" , answer: "千葉"},
  { question: "044~046" , answer: "神奈川"},
  { question: "048,049" , answer: "埼玉"},
  { question: "052,056" , answer: "愛知"},
  { question: "053,054" , answer: "静岡"},
  { question: "055" , answer: "山梨"},
  { question: "057,058" , answer: "岐阜"},
  { question: "059" , answer: "三重"},
  { question: "072" , answer: "大阪"},
  { question: "073" , answer: "和歌山"},
  { question: "074" , answer: "三重"},
  { question: "076" , answer: "石川、富山"},
  { question: "077" , answer: "京都、福井"},
  { question: "079" , answer: "兵庫"},
  { question: "082,084" , answer: "広島"},
  { question: "083" , answer: "山口"},
  { question: "085" , answer: "鳥取、島根"},
  { question: "086" , answer: "岡山"},
  { question: "087" , answer: "香川"},
  { question: "088" , answer: "高知、徳島"},
  { question: "089" , answer: "愛媛"},
  { question: "092~094" , answer: "福岡"},
  { question: "095" , answer: "佐賀、長嶋"},
  { question: "096" , answer: "熊本"},
  { question: "097" , answer: "大分"},
  { question: "098" , answer: "宮崎、沖縄"},
  { question: "099" , answer: "鹿児島"},
];

// Fisher-Yatesアルゴリズムでランダムシャッフル
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// シャッフルしてから使う
shuffleArray(quizData);


let currentQuestion = 0;

const questionEl = document.getElementById("question");
const answerInput = document.getElementById("answerInput");
const submitBtn = document.getElementById("submitBtn");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
  const quiz = quizData[currentQuestion];
  questionEl.textContent = quiz.question;
  answerInput.value = "";
  resultEl.textContent = "";
  nextBtn.style.display = "none";
}

submitBtn.addEventListener("click", () => {
  const userAnswer = answerInput.value.trim();
  const correctAnswer = quizData[currentQuestion].answer;

  if (userAnswer === "") {
    resultEl.textContent = "答えを入力してください";
    return;
  }

  if (userAnswer === correctAnswer) {
    resultEl.textContent = "正解！";
  } else {
    resultEl.textContent = `不正解！ 正解は「${correctAnswer}」です。`;
  }

  nextBtn.style.display = "inline-block";
});

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "全ての問題が終了しました！";
    answerInput.style.display = "none";
    submitBtn.style.display = "none";
    nextBtn.style.display = "none";
  }
});

loadQuestion();
