let count = 0; // initialize count variable to 0

document.getElementById("increment-btn").addEventListener("click", () => {
  count += 1; // increment count variable by 1
  document.getElementById("count-el").textContent = count; // update count element with new count value
});

document.getElementById("save-btn").addEventListener("click", () => {
  const saveEl = document.getElementById("save-el");
  if (saveEl.textContent == "Previous amount of people:") {
    saveEl.textContent += ` ${count} `; // append current count value to save element
  } else {
    saveEl.textContent += `- ${count} `; // append current count value to save element with a dash separator
  }
  document.getElementById("count-el").textContent = 0; // reset count element to 0
  count = 0; // reset count variable to 0
});
