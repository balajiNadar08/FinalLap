const addEventBtn = document.querySelector(".add-btn");
const addEventContainer = document.querySelector(".add-events-glass");
const cancelBtn = document.querySelector(".cancel-btn");

let addEventContainerOpen = false;

function containerToggle() {
  if (!addEventContainerOpen) {
    addEventContainer.style.display = "block";
    addEventContainerOpen = true;
  } else {
    addEventContainer.style.display = "none";
    addEventContainerOpen = false;
  }
}

addEventBtn.addEventListener("click", containerToggle);
cancelBtn.addEventListener("click", containerToggle);