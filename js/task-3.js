const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
  const inputValue = nameInput.value.trim();
  nameOutput.textContent = inputValue || "Anonymous";
});

// Насправді, срочатку так і було, але мені чомусь не сподобалось :) Більше не буду 'ініціативнічати')))
