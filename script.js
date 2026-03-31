// ELEMENTY
const screens = {
    menu: document.getElementById("menu"),
    lessons: document.getElementById("lessons"),
    range: document.getElementById("range"),
    game: document.getElementById("game"),
    result: document.getElementById("result"),
    profile: document.getElementById("profile"),
    settings: document.getElementById("settings")
};

const rangeSelect = document.getElementById("rangeSelect");
const task = document.getElementById("task");
const answer = document.getElementById("answer");
const feedback = document.getElementById("feedback");
const scoreText = document.getElementById("scoreText");
const avatarInput = document.getElementById("avatarInput");
const avatarImg = document.getElementById("profile-avatar");
const displayMode = document.getElementById("displayMode");

// ZMIENNE GRY
let mode = "";
let correctAnswer = 0;
let totalQuestions = 20;
let currentQuestion = 0;
let score = 0;

// GENEROWANIE OPCJI ZAKRESU
for (let i = 1; i <= 10; i++) {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = "Do " + i;
    rangeSelect.appendChild(opt);
}

// PRZEŁĄCZANIE EKRANÓW
function show(screen) {
    Object.values(screens).forEach(s => s.classList.add("hidden"));
    screens[screen].classList.remove("hidden");
}

// OBSŁUGA MENU
document.addEventListener("click", e => {
    if (!e.target.classList.contains("menu-btn")) return;

    const action = e.target.dataset.action;
    const selectedMode = e.target.dataset.mode;

    if (action === "lessons") show("lessons");
    if (action === "profile") show("profile");
    if (action === "settings") show("settings");
    if (action === "menu") show("menu");

    if (selectedMode) {
        mode = selectedMode;
        show("range");
    }

    if (action === "start") startGame();
    if (action === "check") checkAnswer();
    if (action === "saveProfile") alert("Profil zapisany!");
});

// START GRY
function startGame() {
    currentQuestion = 0;
    score = 0;
    show("game");
    generateTask();
}

// GENEROWANIE ZADAŃ
function generateTask() {
    currentQuestion++;

    if (currentQuestion > totalQuestions) {
        showResult();
        return;
    }

    const range = parseInt(rangeSelect.value);
    const a = Math.floor(Math.random() * range) + 1;
    const b = Math.floor(Math.random() * range) + 1;

    if (mode === "mnozenie") {
        correctAnswer = a * b;
        task.innerText = `Pytanie ${currentQuestion}/${totalQuestions}\n${a} × ${b} = ?`;
    } else {
        correctAnswer = a;
        const result = a * b;
        task.innerText = `Pytanie ${currentQuestion}/${totalQuestions}\n${result} ÷ ${b} = ?`;
    }

    answer.value = "";
    feedback.innerText = "";
}

// SPRAWDZANIE ODPOWIEDZI
function checkAnswer() {
    const user = parseInt(answer.value);

    if (user === correctAnswer) {
        feedback.innerText = "✔️ Dobrze!";
        feedback.style.color = "#00ff88";
        score++;
    } else {
        feedback.innerText = "❌ Źle!";
        feedback.style.color = "#ff4444";
    }

    setTimeout(generateTask, 700);
}

// WYNIK
function showResult() {
    show("result");
    scoreText.innerText = `Twój wynik: ${score}/${totalQuestions}`;
}

// PROFIL – AVATAR
avatarInput.addEventListener("change", () => {
    const file = avatarInput.files[0];
    if (file) avatarImg.src = URL.createObjectURL(file);
});

// USTAWIENIA – TRYB WYŚWIETLANIA
displayMode.addEventListener("change", () => {
    if (displayMode.value === "phone") {
        document.body.classList.add("phone");
    } else {
        document.body.classList.remove("phone");
    }
});
