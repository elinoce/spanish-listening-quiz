const questions = [
  {phrase: 'Hola', choices: ['Hello','Goodbye','Please'], answer: 0},
  {phrase: 'Gracias', choices: ['Thank you','Sorry','Excuse me'], answer: 0},
  {phrase: '¿Cómo estás?', choices: ['How are you?','What time is it?','Where are you?'], answer: 0},
  {phrase: '¿Dónde está el baño?', choices: ['Where is the bathroom?','How much is it?','I like it'], answer: 0},
  {phrase: '¿Cuánto cuesta?', choices: ['How much is it?','What is your name?','Where are you from?'], answer: 0}
];

let current = 0, score = 0, total = 0;

const playBtn = document.getElementById('play');
const repeatBtn = document.getElementById('repeat');
const nextBtn = document.getElementById('next');
const promptP = document.getElementById('prompt');
const choicesDiv = document.getElementById('choices');
const scoreDiv = document.getElementById('score');

function speak(text){
  if(!('speechSynthesis' in window)){
    alert('Your browser does not support Speech Synthesis.');
    return;
  }
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'es-ES';
  const voices = window.speechSynthesis.getVoices();
  const spanish = voices.find(v => v.lang && v.lang.startsWith('es'));
  if(spanish) utter.voice = spanish;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utter);
}

function renderQuestion(){
  const q = questions[current];
  promptP.textContent = 'Listen and select the correct meaning:';
  choicesDiv.innerHTML = '';
  q.choices.forEach((c, i) => {
    const b = document.createElement('button');
    b.textContent = c;
    b.className = 'choice';
    b.onclick = () => handleChoice(i);
    choicesDiv.appendChild(b);
  });
  playBtn.disabled = false;
  repeatBtn.disabled = false;
  nextBtn.disabled = true;
}

function handleChoice(i){
  const q = questions[current];
  const buttons = choicesDiv.querySelectorAll('button');
  buttons.forEach(btn => btn.disabled = true);
  if(i === q.answer){
    buttons[i].classList.add('correct');
    score++;
  } else {
    buttons[i].classList.add('wrong');
    buttons[q.answer].classList.add('correct');
  }
  total++;
  scoreDiv.textContent = `Score: ${score} / ${total}`;
  nextBtn.disabled = false;
}

playBtn.addEventListener('click', () => speak(questions[current].phrase));
repeatBtn.addEventListener('click', () => speak(questions[current].phrase));
nextBtn.addEventListener('click', () => {
  current++;
  if(current >= questions.length){
    promptP.textContent = `Quiz complete! Final score: ${score} / ${total}`;
    choicesDiv.innerHTML = '';
    playBtn.disabled = true;
    repeatBtn.disabled = true;
    nextBtn.disabled = true;
  } else {
    renderQuestion();
  }
});

if (typeof speechSynthesis !== 'undefined') {
  speechSynthesis.onvoiceschanged = renderQuestion;
}
renderQuestion();
