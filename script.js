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

// No submit flow remains; only the editor UI is displayed.
