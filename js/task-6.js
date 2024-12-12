function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesContainer = document.getElementById("boxes");
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.marginBottom = "10px";
    boxes.push(box);
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";
}

document
  .querySelector("button[data-create]")
  .addEventListener("click", handleCreate);
document
  .querySelector("button[data-destroy]")
  .addEventListener("click", handleDestroy);

function handleCreate() {
  const input = document.querySelector("input");
  const amount = parseInt(input.value, 10);

  if (amount >= 1 && amount <= 100) {
    destroyBoxes();
    createBoxes(amount);
    input.value = "";
  } else {
    alert("Please enter a number between 1 and 100");
  }
}

function handleDestroy() {
  destroyBoxes();
}
