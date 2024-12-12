const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

function updateName() {
  const name = nameInput.value.trim();
  nameOutput.textContent = name !== "" ? name : "Anonymous";
}

nameInput.addEventListener("blur", updateName);

nameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    updateName();
  }
});
