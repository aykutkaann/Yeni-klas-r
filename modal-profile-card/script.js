const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");

//Open
openBtn.addEventListener("click", () => {
  overlay.classList.add("active");
});

//Close

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("active");
});

//click outside

overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  e.stopPropagation();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    overlay.classList.remove("active");
  }
});
