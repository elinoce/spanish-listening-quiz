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
  },
  {
    text: "Laura estudia medicina en la universidad. Tiene clases por la mañana y por la tarde trabaja en una librería. En su tiempo libre le gusta ver películas o pasear por el parque con sus amigos.",
    transcript: "Laura estudia medicina en la universidad. Tiene clases por la mañana y por la tarde trabaja en una librería. En su tiempo libre le gusta ver películas o pasear por el parque con sus amigos.",
    questions: [
      { q: "¿Qué estudia Laura?", options: ["Derecho", "Medicina", "Historia"], answer: 1 },
      { q: "¿Cuándo trabaja?", options: ["Por la mañana", "Por la tarde", "Por la noche"], answer: 1 },
      { q: "¿Dónde trabaja Laura?", options: ["En un hospital", "En una librería", "En una cafetería"], answer: 1 },
      { q: "¿Qué hace en su tiempo libre?", options: ["Ve películas o pasea", "Estudia todo el día", "Viaja mucho"], answer: 0 },
      { q: "¿Con quién pasea Laura?", options: ["Con su familia", "Con sus amigos", "Con su perro"], answer: 1 }
    ]
  }
];

let current = 0;

const showQuestionsBtn = document.getElementById("show-questions");
const showTranscriptBtn = document.getElementById("show-transcript");
const transcriptDiv = document.getElementById("transcript");
const questionsDiv = document.getElementById("questions");
const nextBtn = document.getElementById("next");

function playAudio(passage, onEnd) {
  const utterance = new SpeechSynthesisUtterance(passage.text);
  utterance.lang = "es-ES";
  utterance.onend = onEnd;
  speechSynthesis.speak(utterance);
}

function startPassage() {
  resetView();
  const passage = passages[current];
  playAudio(passage, () => {
    showQuestionsBtn.classList.remove("hidden");
  });
}

showQuestionsBtn.onclick = () => {
  const passage = passages[current];
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
  const correct = passages[current].questions[questionIndex].answer;
  if (selected === correct) {
    btn.style.background = "#28a745";
  } else {
    btn.style.background = "#dc3545";
  }
}

showTranscriptBtn.onclick = () => {
  transcriptDiv.textContent = passages[current].transcript;
  transcriptDiv.classList.remove("hidden");
  nextBtn.classList.remove("hidden");
};

nextBtn.onclick = () => {
  current++;
  if (current >= passages.length) {
    alert("¡Has completado todos los ejercicios!");
    current = 0;
  }
  startPassage();
};

function resetView() {
  questionsDiv.classList.add("hidden");
  showTranscriptBtn.classList.add("hidden");
  transcriptDiv.classList.add("hidden");
  nextBtn.classList.add("hidden");
  showQuestionsBtn.classList.add("hidden");
  transcriptDiv.textContent = "";
  questionsDiv.innerHTML = "";
  speechSynthesis.cancel();
}

// Start automatically when page loads
window.onload = startPassage;
