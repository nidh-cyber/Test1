const openBtn = document.getElementById("openBtn");
const overlay = document.getElementById("overlay");
const closeBtn = document.querySelector(".close");

console.log(openBtn);
console.log(overlay);
console.log(closeBtn);
function openModal() {
  overlay.classList.remove("hidden");
}

function closeModal() {
  overlay.classList.add("hidden");
}

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});