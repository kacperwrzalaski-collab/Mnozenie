/* ============================================================
   KOSMETYKI – SKLEP
============================================================ */
const frames = [
  { id: "frame_basic_black", name: "Basic Black", rarity: "common", price: 150, type: "frame" },
  { id: "frame_soft_white", name: "Soft White", rarity: "common", price: 150, type: "frame" },
  { id: "frame_pastel_blue", name: "Pastel Blue", rarity: "common", price: 150, type: "frame" },
  { id: "frame_neon_cyan", name: "Neon Cyan", rarity: "rare", price: 600, type: "frame" },
  { id: "frame_neon_magenta", name: "Neon Magenta", rarity: "rare", price: 600, type: "frame" },
  { id: "frame_pulse_wave", name: "Pulse Wave", rarity: "legendary", price: 2000, type: "frame" },
  { id: "frame_neon_circuit", name: "Neon Circuit", rarity: "legendary", price: 2000, type: "frame" },
  { id: "frame_aurora_flow", name: "Aurora Flow", rarity: "legendary", price: 2000, type: "frame" }
];

const backgrounds = [
  { id: "bg_white", name: "Białe", rarity: "common", price: 100, type: "background", color: "#f5f5f5" },
  { id: "bg_graphite", name: "Grafit", rarity: "common", price: 100, type: "background", color: "#1a1a24" },
  { id: "bg_pastel_blue", name: "Pastelowy niebieski", rarity: "common", price: 100, type: "background", color: "#a8c5ff" },
  { id: "bg_neon_cyan", name: "Neon Cyan Glow", rarity: "rare", price: 500, type: "background", color: "#00ffc8" },
  { id: "bg_neon_purple", name: "Neon Purple Glow", rarity: "rare", price: 500, type: "background", color: "#b000ff" },
  { id: "bg_anim_gradient_blue_purple", name: "Pulsujący gradient", rarity: "legendary", price: 1800, type: "background" },
  { id: "bg_anim_neon_pink", name: "Neon Pink Flow", rarity: "legendary", price: 1800, type: "background" },
  { id: "bg_anim_cyber_grid", name: "Cyber Grid", rarity: "legendary", price: 1800, type: "background" }
];

const nickColors = [
  { id: "nick_white", name: "Biały", hex: "#ffffff", price: 80, type: "nickColor" },
  { id: "nick_red", name: "Czerwony", hex: "#ff3b3b", price: 80, type: "nickColor" },
  { id: "nick_blue", name: "Niebieski", hex: "#3b7bff", price: 80, type: "nickColor" },
  { id: "nick_green", name: "Zielony", hex: "#3bff7b", price: 80, type: "nickColor" },
  { id: "nick_cyan", name: "Turkusowy", hex: "#00ffc8", price: 80, type: "nickColor" }
];

/* ============================================================
   KOSMETYKI – SKRZYNKI
============================================================ */
const crateFrames = [
  { id:"crate_frame_ember", name:"Ember Glow", rarity:"rare", type:"frame" },
  { id:"crate_frame_ice", name:"Frozen Edge", rarity:"rare", type:"frame" },
  { id:"crate_frame_shadow", name:"Shadow Rift", rarity:"rare", type:"frame" },
  { id:"crate_frame_plasma", name:"Plasma Arc", rarity:"epic", type:"frame" },
  { id:"crate_frame_storm", name:"Storm Surge", rarity:"epic", type:"frame" },
  { id:"crate_frame_holo", name:"Hologram", rarity:"epic", type:"frame" },
  { id:"crate_frame_void", name:"Void Pulse", rarity:"legendary", type:"frame" },
  { id:"crate_frame_dragon", name:"Dragon Scale", rarity:"legendary", type:"frame" },
  { id:"crate_frame_phoenix", name:"Phoenix Flame", rarity:"legendary", type:"frame" },
  { id:"crate_frame_cosmic", name:"Cosmic Rift", rarity:"mythic", type:"frame" }
];

const crateBackgrounds = [
  { id:"crate_bg_sunset", name:"Sunset Horizon", rarity:"rare", type:"background" },
  { id:"crate_bg_ocean", name:"Deep Ocean", rarity:"rare", type:"background" },
  { id:"crate_bg_forest", name:"Mystic Forest", rarity:"rare", type:"background" },
  { id:"crate_bg_neonwave", name:"Neon Wave", rarity:"epic", type:"background" },
  { id:"crate_bg_stars", name:"Starfield", rarity:"epic", type:"background" },
  { id:"crate_bg_grid", name:"Cyber Grid", rarity:"epic", type:"background" },
  { id:"crate_bg_aurora", name:"Aurora Flow", rarity:"legendary", type:"background" },
  { id:"crate_bg_blackhole", name:"Black Hole", rarity:"legendary", type:"background" },
  { id:"crate_bg_lightning", name:"Lightning Storm", rarity:"legendary", type:"background" },
  { id:"crate_bg_supernova", name:"Supernova", rarity:"mythic", type:"background" }
];

const crateNickColors = [
  { id:"crate_color_crimson", name:"Crimson", hex:"#d10000", type:"nickColor" },
  { id:"crate_color_royalblue", name:"Royal Blue", hex:"#4169e1", type:"nickColor" },
  { id:"crate_color_lime", name:"Lime", hex:"#32ff32", type:"nickColor" },
  { id:"crate_color_gold", name:"Gold", hex:"#ffd700", type:"nickColor" },
  { id:"crate_color_violet", name:"Violet", hex:"#9400d3", type:"nickColor" },
  { id:"crate_color_toxic", name:"Toxic Green", hex:"#39ff14", type:"nickColor" },
  { id:"crate_color_sky", name:"Sky Glow", hex:"#00eaff", type:"nickColor" },
  { id:"crate_color_rose", name:"Rose Pink", hex:"#ff4da6", type:"nickColor" },
  { id:"crate_color_fire", name:"Fire Orange", hex:"#ff6a00", type:"nickColor" },
  { id:"crate_color_void", name:"Void Purple", hex:"#6f00ff", type:"nickColor" }
];

/* ============================================================
   SKRZYNKI
============================================================ */
const crates = [
  {
    id:"crate_cosmetics_basic",
    name:"Skrzynka Kosmetyczna",
    price:300,
    drops:[ ...crateFrames.slice(0,3), ...crateBackgrounds.slice(0,3), ...crateNickColors.slice(0,3) ]
  },
  {
    id:"crate_cosmetics_epic",
    name:"Skrzynka Epicka",
    price:600,
    drops:[ ...crateFrames.slice(3,6), ...crateBackgrounds.slice(3,6), ...crateNickColors.slice(3,6) ]
  },
  {
    id:"crate_cosmetics_legendary",
    name:"Skrzynka Legyczna",
    price:1200,
    drops:[ ...crateFrames.slice(6,9), ...crateBackgrounds.slice(6,9), ...crateNickColors.slice(6,9) ]
  },
  {
    id:"crate_perfect_quiz",
    name:"Skrzynka Perfekcyjna",
    price:0,
    rewardCoins:{min:10,max:300},
    drops:[ ...crateFrames.slice(9), ...crateBackgrounds.slice(9), ...crateNickColors.slice(9) ]
  }
];

/* ============================================================
   GAME PASS – FREE
============================================================ */
const gamePassRewards = [
  { type:"coins", amount:100 },                     // 1
  { type:"xp", amount:50 },                         // 2
  { type:"frame", id:"pass_frame_1" },              // 3
  { type:"background", id:"pass_bg_1" },            // 4
  { type:"nickColor", id:"pass_color_1" },          // 5

  { type:"coins", amount:150 },                     // 6
  { type:"xp", amount:60 },                         // 7
  { type:"frame", id:"pass_frame_2" },              // 8
  { type:"background", id:"pass_bg_2" },            // 9
  { type:"nickColor", id:"pass_color_2" },          // 10

  { type:"coins", amount:200 },                     // 11
  { type:"xp", amount:70 },                         // 12
  { type:"frame", id:"pass_frame_3" },              // 13
  { type:"background", id:"pass_bg_3" },            // 14
  { type:"nickColor", id:"pass_color_3" },          // 15

  { type:"coins", amount:250 },                     // 16
  { type:"xp", amount:80 },                         // 17
  { type:"frame", id:"pass_frame_4" },              // 18
  { type:"background", id:"pass_bg_4" },            // 19
  { type:"nickColor", id:"pass_color_4" },          // 20

  { type:"coins", amount:300 },                     // 21
  { type:"xp", amount:90 },                         // 22
  { type:"frame", id:"pass_frame_5" },              // 23
  { type:"background", id:"pass_bg_5" },            // 24
  { type:"nickColor", id:"pass_color_5" },          // 25

  { type:"coins", amount:350 },                     // 26
  { type:"xp", amount:100 },                        // 27
  { type:"frame", id:"pass_frame_6" },              // 28
  { type:"background", id:"pass_bg_6" },            // 29
  { type:"nickColor", id:"pass_color_6" },          // 30

  { type:"coins", amount:400 },                     // 31
  { type:"xp", amount:110 },                        // 32
  { type:"frame", id:"pass_frame_7" },              // 33
  { type:"background", id:"pass_bg_7" },            // 34
  { type:"nickColor", id:"pass_color_7" },          // 35

  { type:"coins", amount:450 },                     // 36
  { type:"xp", amount:120 },                        // 37
  { type:"frame", id:"pass_frame_8" },              // 38
  { type:"background", id:"pass_bg_8" },            // 39
  { type:"nickColor", id:"pass_color_8" }           // 40
];

/* ============================================================
   GAME PASS – PREMIUM (40 poziomów)
============================================================ */
const gamePassPremiumRewards = [
  { type:"coins", amount:300 },                     // 1
  { type:"xp", amount:150 },                        // 2
  { type:"frame", id:"premium_frame_neon_gold" },   // 3
  { type:"background", id:"premium_bg_sunrise" },   // 4
  { type:"nickColor", id:"premium_color_gold" },    // 5

  { type:"coins", amount:400 },                     // 6
  { type:"xp", amount:200 },                        // 7
  { type:"frame", id:"premium_frame_royal" },       // 8
  { type:"background", id:"premium_bg_royal" },     // 9
  { type:"nickColor", id:"premium_color_royal" },   // 10

  { type:"coins", amount:500 },                     // 11
  { type:"xp", amount:250 },                        // 12
  { type:"frame", id:"premium_frame_plasma" },      // 13
  { type:"background", id:"premium_bg_plasma" },    // 14
  { type:"nickColor", id:"premium_color_plasma" },  // 15

  { type:"coins", amount:600 },                     // 16
  { type:"xp", amount:300 },                        // 17
  { type:"frame", id:"premium_frame_aurora" },      // 18
  { type:"background", id:"premium_bg_aurora" },    // 19
  { type:"nickColor", id:"premium_color_aurora" },  // 20

  { type:"coins", amount:700 },                     // 21
  { type:"xp", amount:350 },                        // 22
  { type:"frame", id:"premium_frame_shadow" },      // 23
  { type:"background", id:"premium_bg_shadow" },    // 24
  { type:"nickColor", id:"premium_color_shadow" },  // 25

  { type:"coins", amount:800 },                     // 26
  { type:"xp", amount:400 },                        // 27
  { type:"frame", id:"premium_frame_starlight" },   // 28
  { type:"background", id:"premium_bg_starlight" }, // 29
  { type:"nickColor", id:"premium_color_starlight" }, // 30

  { type:"coins", amount:900 },                     // 31
  { type:"xp", amount:450 },                        // 32
  { type:"frame", id:"premium_frame_void" },        // 33
  { type:"background", id:"premium_bg_void" },      // 34
  { type:"nickColor", id:"premium_color_void" },    // 35

  { type:"coins", amount:1000 },                    // 36
  { type:"xp", amount:500 },                        // 37
  { type:"frame", id:"premium_frame_cosmic" },      // 38
  { type:"background", id:"premium_bg_cosmic" },    // 39
  { type:"nickColor", id:"premium_color_cosmic" }   // 40
];

/* ============================================================
   POZIOMY
============================================================ */
const levelNames = [
  "Drewno I","Drewno II","Drewno III",
  "Brąz I","Brąz II","Brąz III",
  "Srebro I","Srebro II","Srebro III",
  "Złoto I","Złoto II","Złoto III",
  "Diament","Mistrz","Arcymistrz"
];
function getLevelName(level){ return levelNames[Math.min(level-1, levelNames.length-1)]; }

/* ============================================================
   ZADANIA
============================================================ */
let dailyTasks = [
  { id:"task_quiz_5", name:"Ukończ 5 pytań w quizie", rewardCoins:50, rewardXP:20, rewardCrate:null, progress:0, goal:5, completed:false, cooldownUntil:0 },
  { id:"task_correct_10", name:"Zdobądź 10 poprawnych odpowiedzi", rewardCoins:80, rewardXP:30, rewardCrate:null, progress:0, goal:10, completed:false, cooldownUntil:0 },
  { id:"task_play_1", name:"Zagraj 1 pełny quiz", rewardCoins:100, rewardXP:40, rewardCrate:"crate_cosmetics_basic", progress:0, goal:1, completed:false, cooldownUntil:0 },
  { id:"task_perfect", name:"Zdobądź 20/20 w quizie", rewardCoins:200, rewardXP:80, rewardCrate:"crate_cosmetics_epic", progress:0, goal:1, completed:false, cooldownUntil:0 }
];

const allTasksPool = ["task_quiz_5","task_correct_10","task_play_1","task_perfect"];

/* ============================================================
   PROFIL GRACZA
============================================================ */
let player = {
  name:"Niezalogowany",
  coins:0,
  ownedFrames:[],
  ownedBackgrounds:[],
  ownedNickColors:[],
  equippedFrame:null,
  equippedBackground:null,
  equippedNickColor:null,
  ownedCrates:[],
  xp:0,
  level:1,
  customAvatar:null,
  premiumPass:false,
  xpass:0,
  xpassLevel:1,
  xpassClaimed:[],
  xpassPremiumClaimed:[]
};

let currentUser = null;
let authMode = "login";

/* ============================================================
   STORAGE
============================================================ */
function savePlayer() {
  if (!currentUser) return;
  localStorage.setItem("player_" + currentUser, JSON.stringify(player));
  localStorage.setItem("tasks_" + currentUser, JSON.stringify(dailyTasks));
}

function loadPlayerFromStorage() {
  const savedUser = localStorage.getItem("currentUser");
  if (savedUser) {
    currentUser = savedUser;
    const data = localStorage.getItem("player_" + currentUser);
    if (data) player = JSON.parse(data);
    const tasksData = localStorage.getItem("tasks_" + currentUser);
    if (tasksData) dailyTasks = JSON.parse(tasksData);
  }
}

function saveUsers(users){ localStorage.setItem("users", JSON.stringify(users)); }
function loadUsers(){ const raw = localStorage.getItem("users"); return raw ? JSON.parse(raw) : {}; }

/* ============================================================
   LOGOWANIE / REJESTRACJA
============================================================ */
function switchAuth(mode){
  authMode = mode;

  document.getElementById("loginTab").classList.remove("active");
  document.getElementById("registerTab").classList.remove("active");

  if (mode === "login") {
    document.getElementById("loginTab").classList.add("active");
    document.getElementById("authSubmit").innerText = "Zaloguj";
  } else {
    document.getElementById("registerTab").classList.add("active");
    document.getElementById("authSubmit").innerText = "Zarejestruj";
  }
}

function submitAuth(){
  const username = document.getElementById("authUsername").value.trim();
  const password = document.getElementById("authPassword").value;

  if (!username || !password) {
    alert("Podaj login i hasło.");
    return;
  }

  const users = loadUsers();

  if (authMode === "register") {
    if (users[username]) {
      alert("Taki użytkownik już istnieje.");
      return;
    }

    users[username] = { password };
    saveUsers(users);

    currentUser = username;
    localStorage.setItem("currentUser", username);

    player = {
      name: username,
      coins: 0,
      ownedFrames: [],
      ownedBackgrounds: [],
      ownedNickColors: [],
      equippedFrame: null,
      equippedBackground: null,
      equippedNickColor: null,
      ownedCrates: [],
      xp: 0,
      level: 1,
      customAvatar: null,
      premiumPass:false,
      xpass:0,
      xpassLevel:1,
      xpassClaimed:[],
      xpassPremiumClaimed:[]
    };

    dailyTasks = dailyTasks.map(t => ({
      ...t,
      progress: 0,
      completed: false,
      cooldownUntil: 0
    }));

    savePlayer();
    enterGame();
    return;
  }

  if (authMode === "login") {
    if (!users[username] || users[username].password !== password) {
      alert("Nieprawidłowy login lub hasło.");
      return;
    }

    currentUser = username;
    localStorage.setItem("currentUser", username);

    const data = localStorage.getItem("player_" + username);
    if (data) player = JSON.parse(data);

    const tasksData = localStorage.getItem("tasks_" + username);
    if (tasksData) dailyTasks = JSON.parse(tasksData);

    enterGame();
  }
}

function enterGame(){
  document.getElementById("authScreen").classList.add("hidden");
  document.getElementById("layout").classList.remove("hidden");
  updateMenu();
  updateAvatarDisplay();
  openPage("menuDummy");
}

function logout(){
  currentUser = null;
  localStorage.removeItem("currentUser");
  document.getElementById("layout").classList.add("hidden");
  document.getElementById("authScreen").classList.remove("hidden");
}

/* ============================================================
   STRONY / NAWIGACJA
============================================================ */
function openPage(name){
  document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
  document.getElementById(name).classList.remove("hidden");

  if (name === "shop") renderShop();
  if (name === "profile") renderProfile();
  if (name === "settings") renderSettings();
  if (name === "inventory") renderInventory();
  if (name === "tasks") { refreshTasks(); renderTasks(); }
  if (name === "gamepass") renderGamePass();
}

/* ============================================================
   SIDEBAR UPDATE
============================================================ */
function updateMenu(){
  document.getElementById("playerNameSidebar").innerText = player.name;
  document.getElementById("coinsDisplay").innerText = player.coins;

  const xpPercent = Math.round((player.xp / 100) * 100);
  document.getElementById("playerXPFill").style.width = xpPercent + "%";
  document.getElementById("playerXPLabel").innerText =
    `Poziom: ${getLevelName(player.level)} (${player.xp}/100 XP)`;

  document.getElementById("playerAvatar").innerText =
    player.name[0]?.toUpperCase() || "A";

  applyEquippedNickColor();
  applyEquippedFrame();
  applyEquippedBackground();
  updateAvatarDisplay();
}

/* ============================================================
   QUIZ – TABLICZKA MNOŻENIA
============================================================ */
let generatedQuestions = [];
let quizIndex = 0;
let quizCorrect = 0;

function startQuiz(){
  let min = parseInt(prompt("Podaj minimalny zakres (np. 1):", "1"), 10);
  let max = parseInt(prompt("Podaj maksymalny zakres (np. 10):", "10"), 10);

  if (isNaN(min) || isNaN(max) || min < 1 || max < min) {
    alert("Nieprawidłowy zakres. Ustawiam 1–10.");
    min = 1; max = 10;
  }

  generatedQuestions = generateMultiplicationQuestions(min, max, 20);
  quizIndex = 0;
  quizCorrect = 0;

  openPage("quiz");
  loadQuestion();
}

function generateMultiplicationQuestions(min, max, count){
  const questions = [];
  for (let i = 0; i < count; i++){
    const a = rand(min, max);
    const b = rand(min, max);
    const correct = a * b;
    const answers = generateAnswers(correct);
    questions.push({
      question: `${a} × ${b} = ?`,
      answers,
      correctIndex: answers.indexOf(correct)
    });
  }
  return questions;
}

function generateAnswers(correct){
  const set = new Set([correct]);
  while (set.size < 4){
    let wrong = correct + rand(-10, 10);
    if (wrong <= 0) wrong = correct + rand(1, 10);
    set.add(wrong);
  }
  return shuffle([...set]);
}

function rand(min, max){ return Math.floor(Math.random() * (max - min + 1)) + min; }

function shuffle(arr){
  for (let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/* ============================================================
   QUIZ – WPISYWANIE ODPOWIEDZI
============================================================ */
function loadQuestion(){
  const q = generatedQuestions[quizIndex];

  document.getElementById("quizQuestion").innerText =
    `Pytanie ${quizIndex + 1}/20: ${q.question}`;

  const answersWrap = document.getElementById("quizAnswers");
  answersWrap.innerHTML = `
    <input id="quizInput" type="number" placeholder="Wpisz odpowiedź..." class="quiz-input">
    <button class="primary" onclick="submitTypedAnswer()">Zatwierdź</button>
  `;

  document.getElementById("nextQuestionBtn").classList.add("hidden");

  incrementTaskProgress("task_quiz_5", 1);

  const input = document.getElementById("quizInput");
  input.addEventListener("keydown", e => {
    if (e.key === "Enter") submitTypedAnswer();
  });
}

function submitTypedAnswer(){
  const q = generatedQuestions[quizIndex];
  const input = document.getElementById("quizInput");
  const value = parseInt(input.value);

  if (isNaN(value)){
    alert("Wpisz liczbę.");
    return;
  }

  const correct = q.answers[q.correctIndex];

  if (value === correct){
    quizCorrect++;
    addXP(1);
    addXpass(10);
    incrementTaskProgress("task_correct_10", 1);
    input.style.borderColor = "#00ffc8";
  } else {
    input.style.borderColor = "#ff3b3b";
  }

  document.getElementById("nextQuestionBtn").classList.remove("hidden");
}

function nextQuestion(){
  quizIndex++;
  if (quizIndex >= generatedQuestions.length){
    endQuiz();
  } else {
    loadQuestion();
  }
}

function endQuiz(){
  openPage("rewards");

  const title = document.getElementById("rewardsTitle");
  const coinsEl = document.getElementById("rewardsCoins");

  const baseCoins = quizCorrect * 5;
  let bonusCoins = 0;
  let crateId = null;

  if (quizCorrect === 20){
    bonusCoins = 100;
    crateId = "crate_perfect_quiz";
    incrementTaskProgress("task_perfect", 1);
  }

  const totalCoins = baseCoins + bonusCoins;
  player.coins += totalCoins;

  incrementTaskProgress("task_play_1", 1);

  title.innerText = `Poprawne odpowiedzi: ${quizCorrect}/20`;
  coinsEl.innerText = `Otrzymujesz ${totalCoins} monet.`;

  if (crateId){
    player.ownedCrates.push(crateId);
  }

  savePlayer();
  updateMenu();
}

/* ============================================================
   XP / POZIOM
============================================================ */
function addXP(amount){
  player.xp += amount;
  while (player.xp >= 100){
    player.xp -= 100;
    player.level++;
  }
  savePlayer();
  updateMenu();
}

/* ============================================================
   XPASS – GAME PASS
============================================================ */
function addXpass(amount){
  player.xpass += amount;

  while (player.xpass >= 100){
    player.xpass -= 100;
    player.xpassLevel++;
  }

  savePlayer();
  renderGamePass();
}

/* ============================================================
   SKLEP
============================================================ */
function renderShop(){
  const framesWrap = document.getElementById("shopFrames");
  const bgWrap = document.getElementById("shopBackgrounds");
  const nickWrap = document.getElementById("shopNickColors");
  const cratesWrap = document.getElementById("shopCrates");

  framesWrap.innerHTML = "";
  bgWrap.innerHTML = "";
  nickWrap.innerHTML = "";
  cratesWrap.innerHTML = "";

  frames.forEach(f => {
    const owned = player.ownedFrames.includes(f.id);
    const div = document.createElement("div");
    div.className = "shop-item";
    div.innerHTML = `
      <div class="shop-item-header">
        <span class="shop-item-name">${f.name}</span>
        <span class="shop-item-rarity ${f.rarity}">${f.rarity}</span>
      </div>
      <div class="shop-item-price">Cena: ${f.price} 💰</div>
      <button ${owned ? "disabled" : ""}>${owned ? "Posiadane" : "Kup"}</button>
    `;
    div.querySelector("button").onclick = () => buyFrame(f);
    framesWrap.appendChild(div);
  });

  backgrounds.forEach(b => {
    const owned = player.ownedBackgrounds.includes(b.id);
    const div = document.createElement("div");
    div.className = "shop-item";
    div.innerHTML = `
      <div class="shop-item-header">
        <span class="shop-item-name">${b.name}</span>
        <span class="shop-item-rarity ${b.rarity}">${b.rarity}</span>
      </div>
      <div class="shop-item-price">Cena: ${b.price} 💰</div>
      <button ${owned ? "disabled" : ""}>${owned ? "Posiadane" : "Kup"}</button>
    `;
    div.querySelector("button").onclick = () => buyBackground(b);
    bgWrap.appendChild(div);
  });

  nickColors.forEach(c => {
    const owned = player.ownedNickColors.includes(c.id);
    const div = document.createElement("div");
    div.className = "shop-item";
    div.innerHTML = `
      <div class="shop-item-header">
        <span class="shop-item-name" style="color:${c.hex}">${c.name}</span>
        <span class="shop-item-rarity common">kolor</span>
      </div>
      <div class="shop-item-price">Cena: ${c.price} 💰</div>
      <button ${owned ? "disabled" : ""}>${owned ? "Posiadane" : "Kup"}</button>
    `;
    div.querySelector("button").onclick = () => buyNickColor(c);
    nickWrap.appendChild(div);
  });

  crates.forEach(cr => {
    if (cr.id === "crate_perfect_quiz") return;
    const div = document.createElement("div");
    div.className = "shop-item";
    div.innerHTML = `
      <div class="shop-item-header">
        <span class="shop-item-name">${cr.name}</span>
        <span class="shop-item-rarity rare">skrzynka</span>
      </div>
      <div class="shop-item-price">Cena: ${cr.price} 💰</div>
      <button>Kup skrzynkę</button>
    `;
    div.querySelector("button").onclick = () => buyCrate(cr);
    cratesWrap.appendChild(div);
  });
}

function buyFrame(f){
  if (player.ownedFrames.includes(f.id)) return;
  if (player.coins < f.price){
    alert("Za mało monet.");
    return;
  }
  player.coins -= f.price;
  player.ownedFrames.push(f.id);
  savePlayer();
  updateMenu();
  renderShop();
}

function buyBackground(b){
  if (player.ownedBackgrounds.includes(b.id)) return;
  if (player.coins < b.price){
    alert("Za mało monet.");
    return;
  }
  player.coins -= b.price;
  player.ownedBackgrounds.push(b.id);
  savePlayer();
  updateMenu();
  renderShop();
}

function buyNickColor(c){
  if (player.ownedNickColors.includes(c.id)) return;
  if (player.coins < c.price){
    alert("Za mało monet.");
    return;
  }
  player.coins -= c.price;
  player.ownedNickColors.push(c.id);
  savePlayer();
  updateMenu();
  renderShop();
}

function buyCrate(cr){
  if (player.coins < cr.price){
    alert("Za mało monet.");
    return;
  }
  player.coins -= cr.price;
  player.ownedCrates.push(cr.id);
  savePlayer();
  updateMenu();
  renderInventory();
}

/* ============================================================
   PROFIL / EKWIPUNEK / USTAWIENIA
============================================================ */
function renderProfile(){
  document.getElementById("profileNick").innerText = player.name;
  document.getElementById("profileAvatar").innerText =
    player.name[0]?.toUpperCase() || "A";

  const xpPercent = Math.round((player.xp / 100) * 100);
  document.getElementById("xpFill").style.width = xpPercent + "%";
  document.getElementById("xpLabel").innerText =
    `Poziom: ${getLevelName(player.level)} (${player.xp}/100 XP)`;

  const framesWrap = document.getElementById("profileFrames");
  const nickWrap = document.getElementById("profileNickColors");
  framesWrap.innerHTML = "";
  nickWrap.innerHTML = "";

  [...frames, ...crateFrames].forEach(f => {
    const owned = player.ownedFrames.includes(f.id);
    const div = document.createElement("div");
    div.className = "profile-item" + (owned ? " owned" : "");
    if (player.equippedFrame === f.id) div.classList.add("equipped");
    div.innerText = f.name + (owned ? "" : " (brak)");
    div.onclick = () => {
      if (!owned) return;
      player.equippedFrame = f.id;
      savePlayer();
      updateMenu();
      renderProfile();
    };
    framesWrap.appendChild(div);
  });

  [...nickColors, ...crateNickColors].forEach(c => {
    const owned = player.ownedNickColors.includes(c.id);
    const div = document.createElement("div");
    div.className = "profile-item" + (owned ? " owned" : "");
    if (player.equippedNickColor === c.id) div.classList.add("equipped");
    div.style.color = c.hex;
    div.innerText = c.name + (owned ? "" : " (brak)");
    div.onclick = () => {
      if (!owned) return;
      player.equippedNickColor = c.id;
      savePlayer();
      updateMenu();
      renderProfile();
    };
    nickWrap.appendChild(div);
  });

  updateAvatarDisplay();
}

function renderInventory(){
  const wrap = document.getElementById("inventoryCrates");
  wrap.innerHTML = "";
  if (!player.ownedCrates.length){
    wrap.innerText = "Brak skrzynek.";
    return;
  }

  player.ownedCrates.forEach((id, idx) => {
    const cr = crates.find(c => c.id === id);
    const div = document.createElement("div");
    div.className = "inventory-item";
    div.innerHTML = `
      <strong>${cr ? cr.name : id}</strong>
      <button style="float:right;">Otwórz</button>
    `;
    div.querySelector("button").onclick = () => openCrate(idx);
    wrap.appendChild(div);
  });
}

function renderSettings(){
  const wrap = document.getElementById("settingsBackgrounds");
  wrap.innerHTML = "";

  [...backgrounds, ...crateBackgrounds].forEach(b => {
    const owned = player.ownedBackgrounds.includes(b.id);
    const div = document.createElement("div");
    div.className = "settings-item" + (owned ? " owned" : "");
    if (player.equippedBackground === b.id) div.classList.add("equipped");
    div.innerText = b.name + (owned ? "" : " (brak)");
    div.onclick = () => {
      if (!owned) return;
      player.equippedBackground = b.id;
      savePlayer();
      updateMenu();
      renderSettings();
    };
    wrap.appendChild(div);
  });

  const phoneToggle = document.createElement("div");
  phoneToggle.className = "settings-item owned";
  phoneToggle.innerText = "Tryb telefon: " + (localStorage.getItem("phoneMode") === "1" ? "Włączony" : "Wyłączony");

  phoneToggle.onclick = () => {
    const mode = localStorage.getItem("phoneMode") === "1" ? "0" : "1";
    localStorage.setItem("phoneMode", mode);
    applyPhoneMode();
    renderSettings();
  };

  wrap.appendChild(phoneToggle);

  const adminBtn = document.createElement("div");
  adminBtn.className = "settings-item owned";
  adminBtn.innerText = "Admin Panel";

  adminBtn.onclick = () => {
    const pass = prompt("Podaj hasło:");
    if (pass === "1admin2panel") openAdminPanel();
  };

  wrap.appendChild(adminBtn);
}

/* ============================================================
   KOSMETYKI – ZASTOSOWANIE
============================================================ */
function applyEquippedFrame(){
  const frameEl = document.getElementById("profileFrame");
  const sidebarFrame = document.getElementById("playerFrame");
  frameEl.className = "";
  sidebarFrame.className = "";

  frameEl.style.border = "2px solid #444";
  sidebarFrame.style.border = "2px solid #444";

  const allFrames = [...frames, ...crateFrames];
  const f = allFrames.find(x => x.id === player.equippedFrame);
  if (!f) return;

  frameEl.style.border = "2px solid #888";
  sidebarFrame.style.border = "2px solid #888";

  if (f.rarity === "rare"){
    frameEl.style.border = "2px solid #00b7ff";
    sidebarFrame.style.border = "2px solid #00b7ff";
  }
  if (f.rarity === "legendary" || f.rarity === "epic" || f.rarity === "mythic"){
    frameEl.classList.add("frame-pulse");
    sidebarFrame.classList.add("frame-pulse");
  }
}

function applyEquippedNickColor(){
  const nickProfile = document.getElementById("profileNick");
  const nickSidebar = document.getElementById("playerNameSidebar");
  const allColors = [...nickColors, ...crateNickColors];
  const c = allColors.find(x => x.id === player.equippedNickColor);
  const color = c ? c.hex : "#f5f5f5";
  if (nickProfile) nickProfile.style.color = color;
  if (nickSidebar) nickSidebar.style.color = color;
}

function applyEquippedBackground(){
  const content = document.getElementById("content");
  content.classList.remove("bg-anim-gradient","bg-cyber-grid","bg-neon-pulse");
  content.style.background = "";
  content.style.backgroundColor = "";

  const allBg = [...backgrounds, ...crateBackgrounds];
  const b = allBg.find(x => x.id === player.equippedBackground);
  if (!b) return;

  if (b.color){
    content.style.backgroundColor = b.color;
    return;
  }

  if (b.id.includes("gradient")) content.classList.add("bg-anim-gradient");
  else if (b.id.includes("grid")) content.classList.add("bg-cyber-grid");
  else if (b.id.includes("neon")) content.classList.add("bg-neon-pulse");
}

/* ============================================================
   AVATAR – WGRYWANIE
============================================================ */
function uploadAvatar(event){
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e){
    player.customAvatar = e.target.result;
    savePlayer();
    updateAvatarDisplay();
  };
  reader.readAsDataURL(file);
}

function updateAvatarDisplay(){
  const sidebarAvatar = document.getElementById("playerAvatar");
  const profileAvatar = document.getElementById("profileAvatar");

  if (!sidebarAvatar || !profileAvatar) return;

  if (player.customAvatar){
    sidebarAvatar.style.backgroundImage = `url(${player.customAvatar})`;
    sidebarAvatar.innerText = "";
    profileAvatar.style.backgroundImage = `url(${player.customAvatar})`;
    profileAvatar.innerText = "";
  } else {
    sidebarAvatar.style.backgroundImage = "";
    profileAvatar.style.backgroundImage = "";
    sidebarAvatar.innerText = player.name[0]?.toUpperCase() || "A";
    profileAvatar.innerText = player.name[0]?.toUpperCase() || "A";
  }
}

/* ============================================================
   OTWIERANIE SKRZYNEK
============================================================ */
function openCrate(index){
  const crateId = player.ownedCrates[index];
  const cr = crates.find(c => c.id === crateId);
  if (!cr) return;

  player.ownedCrates.splice(index, 1);
  savePlayer();
  renderInventory();

  const overlay = document.createElement("div");
  overlay.className = "crate-opening-overlay";

  const box = document.createElement("div");
  box.className = "crate-opening-box";

  const title = document.createElement("h3");
  title.innerText = `Otwierasz: ${cr.name}`;
  box.appendChild(title);

  const strip = document.createElement("div");
  strip.className = "crate-strip";
  box.appendChild(strip);

  const info = document.createElement("p");
  info.innerText = "Losowanie nagrody...";
  box.appendChild(info);

  const btn = document.createElement("button");
  btn.className = "primary";
  btn.innerText = "Zamknij";
  btn.style.marginTop = "10px";
  btn.onclick = () => document.body.removeChild(overlay);
  box.appendChild(btn);

  overlay.appendChild(box);
  document.body.appendChild(overlay);

  const pool = cr.drops;
  const rollCount = 30;
  let currentIndex = 0;
  let finalItem = null;

  const interval = setInterval(() => {
    strip.innerHTML = "";
    for (let i = 0; i < 6; i++){
      const item = pool[(currentIndex + i) % pool.length];
      const div = document.createElement("div");
      div.className = "crate-strip-item";
      div.innerText = item.name;
      if (i === 2) div.classList.add("highlight");
      strip.appendChild(div);
    }
    currentIndex = (currentIndex + 1) % pool.length;
  }, 80);

  setTimeout(() => {
    clearInterval(interval);
    finalItem = pool[Math.floor(Math.random() * pool.length)];
    strip.innerHTML = "";
    const div = document.createElement("div");
    div.className = "crate-strip-item highlight";
    div.innerText = finalItem.name;
    strip.appendChild(div);

    info.innerText = `Wylosowano: ${finalItem.name}`;

    if (finalItem.type === "frame" && !player.ownedFrames.includes(finalItem.id)){
      player.ownedFrames.push(finalItem.id);
    } else if (finalItem.type === "background" && !player.ownedBackgrounds.includes(finalItem.id)){
      player.ownedBackgrounds.push(finalItem.id);
    } else if (finalItem.type === "nickColor" && !player.ownedNickColors.includes(finalItem.id)){
      player.ownedNickColors.push(finalItem.id);
    }

    savePlayer();
    updateMenu();
  }, rollCount * 80);
}

/* ============================================================
   ZADANIA – ROTACJA
============================================================ */
function refreshTasks(){
  const now = Date.now();
  dailyTasks.forEach(t => {
    if (t.completed && now > t.cooldownUntil){
      const available = allTasksPool.filter(id => !dailyTasks.some(x => x.id === id && x.completed === false));
      const newId = available.length ? available[Math.floor(Math.random() * available.length)] : t.id;
      const template = baseTaskTemplate(newId);
      t.id = template.id;
      t.name = template.name;
      t.rewardCoins = template.rewardCoins;
      t.rewardXP = template.rewardXP;
      t.rewardCrate = template.rewardCrate;
      t.goal = template.goal;
      t.progress = 0;
      t.completed = false;
      t.cooldownUntil = 0;
    }
  });
}

function baseTaskTemplate(id){
  if (id === "task_quiz_5") return { id, name:"Ukończ 5 pytań w quizie", rewardCoins:50, rewardXP:20, rewardCrate:null, goal:5 };
  if (id === "task_correct_10") return { id, name:"Zdobądź 10 poprawnych odpowiedzi", rewardCoins:80, rewardXP:30, rewardCrate:null, goal:10 };
  if (id === "task_play_1") return { id, name:"Zagraj 1 pełny quiz", rewardCoins:100, rewardXP:40, rewardCrate:"crate_cosmetics_basic", goal:1 };
  if (id === "task_perfect") return { id, name:"Zdobądź 20/20 w quizie", rewardCoins:200, rewardXP:80, rewardCrate:"crate_cosmetics_epic", goal:1 };
  return { id:"task_quiz_5", name:"Ukończ 5 pytań w quizie", rewardCoins:50, rewardXP:20, rewardCrate:null, goal:5 };
}

function incrementTaskProgress(taskId, amount){
  const t = dailyTasks.find(x => x.id === taskId && !x.completed);
  if (!t) return;
  t.progress += amount;
  if (t.progress >= t.goal){
    t.completed = true;
    t.cooldownUntil = Date.now() + 15 * 60 * 1000;
  }
  savePlayer();
}

function renderTasks(){
  const wrap = document.getElementById("tasksList");
  wrap.innerHTML = "";
  const now = Date.now();

  dailyTasks.forEach(t => {
    const div = document.createElement("div");
    div.className = "task-item";

    const header = document.createElement("div");
    header.className = "task-header";
    const name = document.createElement("span");
    name.innerText = t.name;
    const status = document.createElement("span");
    status.innerText = t.completed ? "Zakończone" : `${t.progress}/${t.goal}`;
    header.appendChild(name);
    header.appendChild(status);
    div.appendChild(header);

    const bar = document.createElement("div");
    bar.className = "task-progress";
    const fill = document.createElement("div");
    fill.className = "task-progress-fill";
    fill.style.width = Math.min(100, (t.progress / t.goal) * 100) + "%";
    bar.appendChild(fill);
    div.appendChild(bar);

    const reward = document.createElement("div");
    reward.className = "task-reward";
    reward.innerText = `Nagroda: ${t.rewardCoins}💰, ${t.rewardXP}XP` +
      (t.rewardCrate ? `, skrzynka: ${t.rewardCrate}` : "");
    div.appendChild(reward);

    const btn = document.createElement("button");
    btn.className = "task-btn primary";

    if (!t.completed){
      btn.disabled = true;
      btn.innerText = "W trakcie";
    } else {
      if (now < t.cooldownUntil){
        btn.disabled = true;
        const left = Math.ceil((t.cooldownUntil - now) / 60000);
        btn.innerText = `Nowe zadanie za ${left} min`;
      } else {
        btn.disabled = false;
        btn.innerText = "Odbierz nagrodę";
        btn.onclick = () => claimTaskReward(t);
      }
    }

    div.appendChild(btn);
    wrap.appendChild(div);
  });
}

function claimTaskReward(task){
  if (!task.completed) return;
  player.coins += task.rewardCoins;
  addXP(task.rewardXP);
  if (task.rewardCrate){
    player.ownedCrates.push(task.rewardCrate);
  }
  task.cooldownUntil = Date.now() + 15 * 60 * 1000;
  savePlayer();
  updateMenu();
  renderTasks();
}

/* ============================================================
   GAME PASS – FORMAT NAGRÓD
============================================================ */
function formatReward(r){
  if (!r) return "Brak";
  if (r.type === "coins") return `${r.amount} monet`;
  if (r.type === "xp") return `${r.amount} XP`;
  if (r.type === "frame") return `Ramka: ${r.id}`;
  if (r.type === "background") return `Tło: ${r.id}`;
  if (r.type === "nickColor") return `Kolor nicku: ${r.id}`;
  return "Nagroda";
}

function rewardIcon(r){
  if (!r) return "❔";
  if (r.type === "coins") return "💰";
  if (r.type === "xp") return "⭐";
  if (r.type === "frame") return "🖼️";
  if (r.type === "background") return "🌌";
  if (r.type === "nickColor") return "🎨";
  return "❔";
}

/* ============================================================
   GAME PASS – OŚ
============================================================ */
function renderGamePass(){
  const freeRow = document.getElementById("gamepassFreeRow");
  const premiumRow = document.getElementById("gamepassPremiumRow");
  if (!freeRow || !premiumRow) return;

  freeRow.innerHTML = "";
  premiumRow.innerHTML = "";

  const buyBtn = document.getElementById("buyPremiumBtn");
  if (buyBtn) buyBtn.style.display = player.premiumPass ? "none" : "block";

  const xpFill = document.getElementById("gamepassXPFill");
  const xpLabel = document.getElementById("gamepassXPLabel");
  if (xpFill) xpFill.style.width = `${Math.min(100, (player.xpass / 100) * 100)}%`;
  if (xpLabel) xpLabel.innerText = `Poziom karnetu: ${player.xpassLevel} (${player.xpass}/100 XpassP)`;

  for (let i = 1; i <= 40; i++){
    const free = gamePassRewards[i-1];
    const premium = gamePassPremiumRewards[i-1];

    const unlocked = i < player.xpassLevel;
    const freeClaimed = player.xpassClaimed.includes(i);
    const premiumClaimed = player.xpassPremiumClaimed.includes(i);

    const freeTile = document.createElement("div");
    freeTile.className = "gamepass-tile free";
    freeTile.dataset.tooltip = formatReward(free);
    const freeIcon = document.createElement("div");
    freeIcon.className = "gamepass-tile-icon";
    freeIcon.innerText = rewardIcon(free);
    freeTile.appendChild(freeIcon);
    const freeLvl = document.createElement("div");
    freeLvl.className = "gamepass-level-number";
    freeLvl.innerText = i;
    freeTile.appendChild(freeLvl);

    if (!unlocked){
      freeTile.classList.add("locked");
    } else {
      if (freeClaimed){
        freeTile.classList.add("claimed");
      } else {
        freeTile.classList.add("ready");
        freeTile.onclick = () => claimPassReward(i, false);
      }
    }

    freeRow.appendChild(freeTile);

    const premiumTile = document.createElement("div");
    premiumTile.className = "gamepass-tile premium";
    premiumTile.dataset.tooltip = formatReward(premium);
    const premiumIcon = document.createElement("div");
    premiumIcon.className = "gamepass-tile-icon";
    premiumIcon.innerText = rewardIcon(premium);
    premiumTile.appendChild(premiumIcon);
    const premiumLvl = document.createElement("div");
    premiumLvl.className = "gamepass-level-number";
    premiumLvl.innerText = i;
    premiumTile.appendChild(premiumLvl);

    if (!player.premiumPass){
      premiumTile.classList.add("locked");
      premiumTile.dataset.tooltip = "Wymaga Premium Pass";
      premiumTile.onclick = () => {
        alert("Ta nagroda wymaga Premium Pass.");
      };
    } else {
      if (!unlocked){
        premiumTile.classList.add("locked");
      } else {
        if (premiumClaimed){
          premiumTile.classList.add("claimed");
        } else {
          premiumTile.classList.add("ready");
          premiumTile.onclick = () => claimPassReward(i, true);
        }
      }
    }

    premiumRow.appendChild(premiumTile);
  }
}

function claimPassReward(level, premium){
  const reward = premium ?
    gamePassPremiumRewards[level-1] :
    gamePassRewards[level-1];

  if (!reward) return;

  if (premium){
    if (player.xpassPremiumClaimed.includes(level)) return;
  } else {
    if (player.xpassClaimed.includes(level)) return;
  }

  if (reward.type === "coins") player.coins += reward.amount;
  if (reward.type === "xp") addXP(reward.amount);
  if (reward.type === "frame" && !player.ownedFrames.includes(reward.id)) player.ownedFrames.push(reward.id);
  if (reward.type === "background" && !player.ownedBackgrounds.includes(reward.id)) player.ownedBackgrounds.push(reward.id);
  if (reward.type === "nickColor" && !player.ownedNickColors.includes(reward.id)) player.ownedNickColors.push(reward.id);

  if (premium){
    player.xpassPremiumClaimed.push(level);
  } else {
    player.xpassClaimed.push(level);
  }

  savePlayer();
  updateMenu();
  renderGamePass();
}

function buyPremiumPass(){
  if (player.premiumPass){
    alert("Premium Pass już posiadasz.");
    return;
  }

  if (player.coins < 5000){
    alert("Za mało monet.");
    return;
  }

  player.coins -= 5000;
  player.premiumPass = true;

  savePlayer();
  updateMenu();
  renderGamePass();

  alert("Premium Pass aktywowany!");
}

/* ============================================================
   ADMIN PANEL
============================================================ */
function openAdminPanel(){
  const cmd = prompt("Admin Panel aktywny. Wpisz komendę ( /exit aby wyjść ):");

  if (!cmd) return;
  if (cmd === "/exit") return;

  const parts = cmd.split(" ");

  if (parts[0] === "/coins"){
    player.coins += parseInt(parts[1]) || 0;
  }

  if (parts[0] === "/xp"){
    addXP(parseInt(parts[1]) || 0);
  }

  if (parts[0] === "/xpass"){
    addXpass(parseInt(parts[1]) || 0);
  }

  if (parts[0] === "/premium"){
    player.premiumPass = true;
  }

  if (parts[0] === "/give"){
    const type = parts[1];
    const id = parts[2];

    if (type === "frame") player.ownedFrames.push(id);
    if (type === "background") player.ownedBackgrounds.push(id);
    if (type === "nickColor") player.ownedNickColors.push(id);
  }

  savePlayer();
  updateMenu();
  alert("Komenda wykonana.");

  openAdminPanel();
}

/* ============================================================
   TRYB TELEFON
============================================================ */
function applyPhoneMode(){
  const mode = localStorage.getItem("phoneMode") === "1";

  if (mode){
    document.body.classList.add("phone-mode");
  } else {
    document.body.classList.remove("phone-mode");
  }
}

/* ============================================================
   INIT
============================================================ */
window.addEventListener("load", () => {
  loadPlayerFromStorage();
  applyPhoneMode();
  if (currentUser){
    document.getElementById("authScreen").classList.add("hidden");
    document.getElementById("layout").classList.remove("hidden");
    updateMenu();
    updateAvatarDisplay();
    openPage("menuDummy");
  }
});
