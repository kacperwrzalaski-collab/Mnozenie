/* =========================
   APP.JS — pełna gra w 1 pliku
   ========================= */

/* =========================
   DANE GRY — kosmetyki sklepowe
   ========================= */
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

/* =========================
   UNIKALNE KOSMETYKI — tylko ze skrzynek
   ========================= */
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

/* =========================
   SKRZYNKI
   ========================= */
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
    name:"Skrzynka Legendarna",
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

/* =========================
   POZIOMY
   ========================= */
const levelNames = [
  "Drewno I","Drewno II","Drewno III",
  "Brąz I","Brąz II","Brąz III",
  "Srebro I","Srebro II","Srebro III",
  "Złoto I","Złoto II","Złoto III",
  "Diament","Mistrz","Arcymistrz"
];
function getLevelName(level){ return levelNames[Math.min(level-1, levelNames.length-1)]; }

/* =========================
   ZADANIA DZIENNE
   ========================= */
let dailyTasks = [
  { id:"task_quiz_5", name:"Ukończ 5 pytań w quizie", rewardCoins:50, rewardXP:20, rewardCrate:null, progress:0, goal:5, completed:false, cooldownUntil:0 },
  { id:"task_correct_10", name:"Zdobądź 10 poprawnych odpowiedzi", rewardCoins:80, rewardXP:30, rewardCrate:null, progress:0, goal:10, completed:false, cooldownUntil:0 },
  { id:"task_play_1", name:"Zagraj 1 pełny quiz", rewardCoins:100, rewardXP:40, rewardCrate:"crate_cosmetics_basic", progress:0, goal:1, completed:false, cooldownUntil:0 },
  { id:"task_perfect", name:"Zdobądź 20/20 w quizie", rewardCoins:200, rewardXP:80, rewardCrate:"crate_cosmetics_epic", progress:0, goal:1, completed:false, cooldownUntil:0 }
];
const allTasksPool = ["task_quiz_5","task_correct_10","task_play_1","task_perfect"];

/* =========================
   PROFIL GRACZA
   ========================= */
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
  level:1
};

let currentUser = null;
let authMode = null;

/* =========================
   STORAGE
   ========================= */
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

/* =========================
   UI: strony, menu
   ========================= */
function openPage(name){
  document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
  const page = document.getElementById(name);
  if (page) page.classList.remove("hidden");

  if (name === "shop") renderShop();
  if (name === "profile") renderProfile();
  if (name === "settings") renderSettings();
  if (name === "inventory") renderInventory();
  if (name === "tasks") { refreshTasks(); renderTasks(); }
}

function updateMenu(){
  document.getElementById("playerName").innerText = player.name || "Nazwa";
  document.getElementById("profileNick").innerText = player.name || "Nazwa";
  document.getElementById("coinsDisplay").innerText = player.coins;
  applyEquippedNickColor();
  applyEquippedFrame();
  applyEquippedBackground();
  updateAuthBar();
}

/* =========================
   AUTH
   ========================= */
function showLogin(){ authMode="login"; document.getElementById("authModalTitle").innerText="Logowanie"; document.getElementById("authModal").classList.remove("hidden"); }
function showRegister(){ authMode="register"; document.getElementById("authModalTitle").innerText="Rejestracja"; document.getElementById("authModal").classList.remove("hidden"); }
function closeAuth(){ document.getElementById("authModal").classList.add("hidden"); document.getElementById("authUsername").value=""; document.getElementById("authPassword").value=""; }

function submitAuth(){
  const username = document.getElementById("authUsername").value.trim();
  const password = document.getElementById("authPassword").value;
  if (!username || !password) { alert("Podaj login i hasło."); return; }
  const users = loadUsers();

  if (authMode === "register") {
    if (users[username]) { alert("Taki użytkownik już istnieje."); return; }
    users[username] = { password };
    saveUsers(users);
    currentUser = username;
    localStorage.setItem("currentUser", username);
    player = { name: username, coins:0, ownedFrames:[], ownedBackgrounds:[], ownedNickColors:[], equippedFrame:null, equippedBackground:null, equippedNickColor:null, ownedCrates:[], xp:0, level:1 };
    dailyTasks = dailyTasks.map(t => ({ ...t, progress:0, completed:false, cooldownUntil:0 }));
    savePlayer();
    closeAuth();
    updateMenu();
    alert("Zarejestrowano i zalogowano.");
    return;
  }

  if (authMode === "login") {
    if (!users[username] || users[username].password !== password) { alert("Nieprawidłowy login lub hasło."); return; }
    currentUser = username;
    localStorage.setItem("currentUser", username);
    const data = localStorage.getItem("player_" + username);
    if (data) player = JSON.parse(data);
    const tasksData = localStorage.getItem("tasks_" + username);
    if (tasksData) dailyTasks = JSON.parse(tasksData);
    closeAuth();
    updateMenu();
    alert("Zalogowano.");
  }
}

function updateAuthBar(){
  const status = document.getElementById("authStatus");
  if (currentUser) status.innerText = `Zalogowano jako: ${currentUser}`;
  else status.innerText = "Niezalogowany";
}

/* =========================
   QUIZ — TABLICZKA MNOŻENIA
   ========================= */
const QUIZ_QUESTION_COUNT = 20;
let generatedQuestions = [];
let quizIndex = 0;
let quizCorrect = 0;

function startQuiz(){
  // wybór zakresu tabliczki mnożenia
  let min = parseInt(prompt("Podaj minimalny zakres (np. 1):", "1"), 10);
  let max = parseInt(prompt("Podaj maksymalny zakres (np. 10):", "10"), 10);
  if (isNaN(min) || isNaN(max) || min < 1 || max < min) {
    alert("Nieprawidłowy zakres. Ustawiam 1–10.");
    min = 1; max = 10;
  }

  generatedQuestions = generateMultiplicationQuestions(min, max, QUIZ_QUESTION_COUNT);
  quizIndex = 0;
  quizCorrect = 0;
  openPage("quiz");
  loadQuestion();
}

function generateMultiplicationQuestions(min, max, count){
  const questions = [];
  for (let i = 0; i < count; i++){
    const a = randInt(min, max);
    const b = randInt(min, max);
    const correct = a * b;
    const answers = generateAnswerOptions(correct, min, max);
    questions.push({
      question: `${a} × ${b} = ?`,
      answers,
      correctIndex: answers.indexOf(correct)
    });
  }
  return questions;
}

function generateAnswerOptions(correct, min, max){
  const set = new Set();
  set.add(correct);
  while (set.size < 4){
    const delta = randInt(-10, 10);
    let candidate = correct + delta;
    if (candidate <= 0) candidate = correct + randInt(1, 10);
    set.add(candidate);
  }
  const arr = Array.from(set);
  // przetasuj
  for (let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function randInt(min, max){ return Math.floor(Math.random() * (max - min + 1)) + min; }

function loadQuestion(){
  const q = generatedQuestions[quizIndex];
  document.getElementById("quizQuestion").innerText = q.question;
  const answersDiv = document.getElementById("quizAnswers");
  answersDiv.innerHTML = "";
  q.answers.forEach((ans, i) => {
    const btn = document.createElement("div");
    btn.className = "quiz-answer";
    btn.innerText = ans;
    btn.onclick = () => selectAnswer(i);
    answersDiv.appendChild(btn);
  });
  document.getElementById("nextQuestionBtn").classList.add("hidden");
}

function selectAnswer(index){
  const q = generatedQuestions[quizIndex];
  const answers = document.querySelectorAll(".quiz-answer");
  answers.forEach((btn, i) => {
    btn.onclick = null;
    if (i === q.correctIndex) btn.classList.add("correct");
    else if (i === index) btn.classList.add("wrong");
  });

  updateTaskProgress("question_answered");

  if (index === q.correctIndex) {
    quizCorrect++;
    player.xp += 1;
    updateTaskProgress("correct_answer");
    checkLevelUp();
  }

  document.getElementById("nextQuestionBtn").classList.remove("hidden");
}

function nextQuestion(){
  quizIndex++;
  if (quizIndex >= generatedQuestions.length) {
    finishQuiz(quizCorrect, generatedQuestions.length);
    return;
  }
  loadQuestion();
}

function finishQuiz(correct, total){
  const coins = correct * 10;
  player.coins += coins;
  updateTaskProgress("quiz_finished");
  if (correct === total) {
    player.ownedCrates.push("crate_perfect_quiz");
    updateTaskProgress("perfect_quiz");
    alert("Perfekcyjny wynik! Otrzymujesz specjalną skrzynkę.");
  }
  savePlayer();
  updateMenu();
  showRewards(correct, total, coins);
}

function showRewards(correct, total, coins){
  document.getElementById("rewardsTitle").innerText = `Wykonano ${correct}/${total} poprawnie.`;
  document.getElementById("rewardsCoins").innerText = `Zdobyto ${coins} coinów.`;
  openPage("rewards");
}

/* =========================
   SKLEP
   ========================= */
function renderShop(){
  const framesContainer = document.getElementById("shopFrames");
  const backgroundsContainer = document.getElementById("shopBackgrounds");
  const nickColorsContainer = document.getElementById("shopNickColors");
  const cratesContainer = document.getElementById("shopCrates");

  framesContainer.innerHTML = "";
  backgroundsContainer.innerHTML = "";
  nickColorsContainer.innerHTML = "";
  cratesContainer.innerHTML = "";

  frames.forEach(item => framesContainer.appendChild(createShopItemElement(item)));
  backgrounds.forEach(item => backgroundsContainer.appendChild(createShopItemElement(item)));
  nickColors.forEach(item => nickColorsContainer.appendChild(createShopItemElement(item)));
  crates.forEach(c => cratesContainer.appendChild(createCrateShopItem(c)));
}

function createShopItemElement(item){
  const div = document.createElement("div"); div.className = "shop-item";
  const header = document.createElement("div"); header.className = "shop-item-header";
  const nameSpan = document.createElement("span"); nameSpan.className = "shop-item-name"; nameSpan.innerText = item.name;
  const raritySpan = document.createElement("span"); raritySpan.className = "shop-item-rarity " + (item.rarity || "common"); raritySpan.innerText = (item.rarity || "").toUpperCase();
  header.appendChild(nameSpan); header.appendChild(raritySpan);
  const priceP = document.createElement("p"); priceP.className = "shop-item-price"; priceP.innerText = `Cena: ${item.price} coinów`;
  const btn = document.createElement("button"); btn.innerText = "Kup"; btn.onclick = () => buyItem(item);
  div.appendChild(header); div.appendChild(priceP); div.appendChild(btn);
  return div;
}

function buyItem(item){
  if (!currentUser) { alert("Zaloguj się, aby kupować."); return; }
  if (player.coins < item.price) { alert("Za mało coinów!"); return; }
  player.coins -= item.price;
  if (item.type === "frame" && !player.ownedFrames.includes(item.id)) player.ownedFrames.push(item.id);
  if (item.type === "background" && !player.ownedBackgrounds.includes(item.id)) player.ownedBackgrounds.push(item.id);
  if (item.type === "nickColor" && !player.ownedNickColors.includes(item.id)) player.ownedNickColors.push(item.id);
  savePlayer(); updateMenu(); renderShop();
  alert(`Kupiono: ${item.name}`);
}

function createCrateShopItem(crate){
  const div = document.createElement("div"); div.className = "shop-item";
  const header = document.createElement("div"); header.className = "shop-item-header";
  const nameSpan = document.createElement("span"); nameSpan.className = "shop-item-name"; nameSpan.innerText = crate.name;
  const raritySpan = document.createElement("span"); raritySpan.innerText = "SKRZYNKA";
  header.appendChild(nameSpan); header.appendChild(raritySpan);
  const priceP = document.createElement("p"); priceP.className = "shop-item-price"; priceP.innerText = `Cena: ${crate.price} coinów`;
  const btn = document.createElement("button"); btn.innerText = crate.price === 0 ? "Darmowa" : "Kup skrzynkę"; btn.onclick = () => buyCrate(crate);
  div.appendChild(header); div.appendChild(priceP); div.appendChild(btn);
  return div;
}

function buyCrate(crate){
  if (!currentUser) { alert("Zaloguj się, aby kupować."); return; }
  if (crate.price > 0 && player.coins < crate.price) { alert("Za mało coinów!"); return; }
  if (crate.price > 0) player.coins -= crate.price;
  player.ownedCrates.push(crate.id);
  savePlayer(); updateMenu(); renderShop();
  alert(`Kupiono: ${crate.name}`);
}

/* =========================
   EKWIPUNEK + OTWIERANIE SKRZYNEK
   ========================= */
function renderInventory(){
  const container = document.getElementById("inventoryCrates");
  container.innerHTML = "";
  if (!player.ownedCrates.length) { container.innerText = "Brak skrzynek."; return; }
  player.ownedCrates.forEach((crateId, index) => {
    const crate = crates.find(c => c.id === crateId);
    if (!crate) return;
    const div = document.createElement("div"); div.className = "inventory-item"; div.innerText = crate.name;
    const btnOpen = document.createElement("button"); btnOpen.style.marginLeft = "8px"; btnOpen.innerText = "Otwórz"; btnOpen.onclick = () => openCrateAnimation(index, crate);
    div.appendChild(btnOpen);
    container.appendChild(div);
  });
}

function openCrateAnimation(crateIndex, crate){
  const overlay = document.createElement("div"); overlay.className = "crate-opening-overlay";
  const box = document.createElement("div"); box.className = "crate-opening-box";
  const title = document.createElement("h3"); title.innerText = `Otwieranie: ${crate.name}`;
  const strip = document.createElement("div"); strip.className = "crate-strip";
  const itemsForAnim = [];

  if (crate.id === "crate_perfect_quiz") {
    for (let i = 0; i < 12; i++) {
      const div = document.createElement("div"); div.className = "crate-strip-item"; 