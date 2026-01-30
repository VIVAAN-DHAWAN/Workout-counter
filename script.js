const STORAGE_KEY = "workoutProgress";

const PULLUPS_GOAL = 100;
const PUSHUPS_GOAL = 200;

let workoutData;

// ===== UTIL =====
function getTodayDate() {
  return new Date().toISOString().split("T")[0];
}

// ===== LOAD & INIT =====
function loadWorkout() {
  const today = getTodayDate();
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (!saved || saved.date !== today) {
    workoutData = {
      date: today,
      pullups: 0,
      pushups: 0
    };
    saveWorkout();
  } else {
    workoutData = saved;
  }
}

// ===== SAVE =====
function saveWorkout() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(workoutData));
}

// ===== RENDER =====
function renderUI() {
  document.getElementById("todayDate").innerText = workoutData.date;

  document.getElementById("pullupsText").innerText =
    `${workoutData.pullups} / ${PULLUPS_GOAL}`;
  document.getElementById("pushupsText").innerText =
    `${workoutData.pushups} / ${PUSHUPS_GOAL}`;

  document.getElementById("pullupsBar").style.width =
    Math.min((workoutData.pullups / PULLUPS_GOAL) * 100, 100) + "%";
  document.getElementById("pushupsBar").style.width =
    Math.min((workoutData.pushups / PUSHUPS_GOAL) * 100, 100) + "%";

  toggleButtons();
}

// ===== BUTTON LOGIC =====
function toggleButtons() {
  document
    .querySelectorAll(".pullup-btn")
    .forEach(btn => btn.disabled = workoutData.pullups >= PULLUPS_GOAL);

  document
    .querySelectorAll(".pushup-btn")
    .forEach(btn => btn.disabled = workoutData.pushups >= PUSHUPS_GOAL);
}

function addPullups(n) {
  workoutData.pullups = Math.min(
    workoutData.pullups + n,
    PULLUPS_GOAL
  );
  saveWorkout();
  renderUI();
}

function addPushups(n) {
  workoutData.pushups = Math.min(
    workoutData.pushups + n,
    PUSHUPS_GOAL
  );
  saveWorkout();
  renderUI();
}

// ===== RESET =====
function resetToday() {
  workoutData.pullups = 0;
  workoutData.pushups = 0;
  saveWorkout();
  renderUI();
}

// ===== INIT =====
loadWorkout();
renderUI();
