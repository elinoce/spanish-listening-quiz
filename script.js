const passages = [
  {
    text: "Hola, me llamo Ana. Trabajo en una cafetería en el centro. Todos los días preparo café y bocadillos para los clientes. Me gusta mi trabajo porque hablo con mucha gente.",
    transcript: "Hola, me llamo Ana. Trabajo en una cafetería en el centro. Todos los días preparo café y bocadillos para los clientes. Me gusta mi trabajo porque hablo con mucha gente.",
    questions: [
      { q: "¿Dónde trabaja Ana?", options: ["En una oficina", "En una cafetería", "En una tienda"], answer: 1 },
      { q: "¿Qué prepara Ana cada día?", options: ["Té y pasteles", "Café y bocadillos", "Agua y zumos"], answer: 1 },
      { q: "¿Dónde está su trabajo?", options: ["En el centro", "En el campo", "En la playa"], answer: 0 },
      { q: "¿Por qué le gusta su trabajo?", options: ["Porque gana mucho dinero", "Porque habla con gente", "Porque está cerca de su casa"], answer: 1 },
      { q: "¿Cómo se llama ella?", options: ["María", "Ana", "Lucía"], answer: 1 }
    ]
  },
  {
    text: "Pedro vive en un pequeño pueblo cerca del mar. Cada mañana sale a correr y luego desayuna pan con aceite. Después trabaja en su tienda hasta las dos de la tarde.",
    transcript: "Pedro vive en un pequeño pueblo cerca del mar. Cada mañana sale a correr y luego desayuna pan con aceite. Después trabaja en su tienda hasta las dos de la tarde.",
    questions: [
      { q: "¿Dónde vive Pedro?", options: ["En la ciudad", "En un pueblo", "En la montaña"], answer: 1 },
      { q: "¿Qué hace por la mañana?", options: ["Nada", "Sale a correr", "Va al mercado"], answer: 1 },
      { q: "¿Qué desayuna Pedro?", options: ["Pan con aceite", "Leche y cereales", "Fruta"], answer: 0 },
      { q: "¿Dónde trabaja Pedro?", options: ["En su tienda", "En una escuela", "En una oficina"], answer: 0 },
      { q: "¿Hasta qué hora trabaja?", options: ["Hasta las tres", "Hasta las dos", "Hasta el mediodía"], answer: 1 }
    ]
  }
];

let currentIndex = 0;
let completedIndexes = JSON.parse(localStorage.getItem("completedIndexes")) || [];

const startBtn = document.getElementById("start-btn");
const repeatBtn = document.getElementById("repeat-audio");
const showQuestionsBtn = document.getElementById("show-questions");
const showTranscriptBtn = document.getElementById("show-transcript");
const transcriptDiv = document.getElementById("transcript");
const questionsDiv = document.getElementById("questions");
const nextBtn = document.getElementById("next");

function pickNextPassage() {
  // pick random passage not yet completed
  const remaining = passages.map((_, i) => i).filter(i => !completedIndexes.includes(i));
  if (remaining.length === 0) {
    completedIndexes = [];
    localStorage.setItem("completedIndexes", JSON.stringify(completedIndexes));
    return pickNextPassage();
  }
  const idx = remaining[Math.floor(Math.random() * remaining.length)];
  currentIndex = idx;
  return passages[idx];
}

function playAudio(passage, onEnd) {
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(passage.text);
  utterance.lang = "es-ES";
  utterance.rate = 0.8;
  utterance.onend = onEnd;
  speechSynthesis.speak(utterance);
}

function startPassage() {
  resetView();
  const passage = pickNextPassage();
  repeatBtn.classList.remove("hidden");
  playAudio(passage, () => {
    showQuestionsBtn.classList.remove("hidden");
  });
}

repeatBtn.onclick = () => {
  playAudio(passages[currentIndex]);
};

startBtn.onclick = () => {
  startBtn.classList.add("hidden");
  document.getElementById("content").classList.remove("hidden");
  startPassage();
};

showQuestionsBtn.onclick = () => {
  const passage = passages[currentIndex];
  questionsDiv.innerHTML = "";
  passage.questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.classList.add("question");
    div.innerHTML = `<strong>${i + 1}. ${q.q}</strong>`;
    const answersDiv = document.createElement("div");
    answersDiv.classList.add("answers");
    q.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.onclick = () => checkAnswer(i, idx, btn);
      answersDiv.appendChild(btn);
    });
    div.appendChild(answersDiv);
    questionsDiv.appendChild(div);
  });
  questionsDiv.classList.remove("hidden");
  showTranscriptBtn.classList.remove("hidden");
};

function checkAnswer(questionIndex, selected, btn) {
  const correct = passages[currentIndex].questions[questionIndex].answer;
  btn.style.background = selected === correct ? "#28a745" : "#dc3545";
}

showTranscriptBtn.onclick = () => {
  transcriptDiv.textContent = passages[currentIndex].transcript;
  transcriptDiv.classList.remove("hidden");
  nextBtn.classList.remove("hidden");
};

nextBtn.onclick = () => {
  completedIndexes.push(currentIndex);
  localStorage.setItem("completedIndexes", JSON.stringify(completedIndexes));
  startPassage();
};

function resetView() {
  questionsDiv.classList.add("hidden");
  showTranscriptBtn.classList.add("hidden");
  transcriptDiv.classList.add("hidden");
  nextBtn.classList.add("hidden");
  showQuestionsBtn.classList.add("hidden");
  repeatBtn.classList.add("hidden");
  transcriptDiv.textContent = "";
  questionsDiv.innerHTML = "";
  speechSynthesis.cancel();
}
