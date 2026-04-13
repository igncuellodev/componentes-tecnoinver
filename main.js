const myButton = document.getElementById("my-button");
const myButton2 = document.getElementById("my-button2");
const plansTable = document.getElementById("my-image");

myButton.addEventListener("click", addTableWidget);
myButton2.addEventListener("click", removeTabletWidget);

function addTableWidget() {
  plansTable.classList.add("show");
}

function removeTabletWidget() {
  plansTable.classList.remove("show");
}
