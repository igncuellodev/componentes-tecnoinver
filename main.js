const toggleBtn = document.getElementById("toggle-button");
const plansTable = document.getElementById("my-image");

toggleBtn.addEventListener("click", () => {
  plansTable.classList.toggle("show");
  toggleBtn.classList.toggle("is-active");

  if (plansTable.classList.contains("show")) {
    toggleBtn.textContent = "Ver menos -";
  } else {
    toggleBtn.textContent = "Comparar planes +";
  }
});
