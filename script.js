// Generate gutter line numbers to match the editor (1..60 like the screenshot)
const TOTAL_LINES = 60;
const gutter = document.getElementById("gutter");

for (let i = 1; i <= TOTAL_LINES; i++) {
  const div = document.createElement("div");
  div.textContent = i;
  gutter.appendChild(div);
}

// Question buttons: set active on click
document.querySelectorAll(".q-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".q-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// Run Code button (visual only)
document.querySelector(".run-btn").addEventListener("click", () => {
  console.log("Run Code clicked");
});

// Save & Proceed (visual only)
document.querySelector(".save-btn").addEventListener("click", () => {
  console.log("Save & Proceed clicked");
});

// Draggable splitter between problem panel and editor panel
const splitter = document.getElementById("splitter");
const problemPanel = document.querySelector(".problem-panel");
const appBody = document.querySelector(".app-body");
const rail = document.querySelector(".rail");

let dragging = false;

splitter.addEventListener("mousedown", (e) => {
  dragging = true;
  splitter.classList.add("dragging");
  document.body.style.cursor = "col-resize";
  document.body.style.userSelect = "none";
  e.preventDefault();
});

document.addEventListener("mousemove", (e) => {
  if (!dragging) return;
  const railWidth = rail.offsetWidth;
  const available = appBody.offsetWidth - railWidth - splitter.offsetWidth;
  let newWidth = e.clientX - railWidth;

  // clamp so neither side collapses (min 280px each)
  const min = 280;
  if (newWidth < min) newWidth = min;
  if (newWidth > available - min) newWidth = available - min;

  problemPanel.style.width = newWidth + "px";
});

document.addEventListener("mouseup", () => {
  if (!dragging) return;
  dragging = false;
  splitter.classList.remove("dragging");
  document.body.style.cursor = "";
  document.body.style.userSelect = "";
});
