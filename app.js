const container = document.querySelector("#container");
const count = document.querySelector(".count-container #count");
count.innerText = 0;
const plusBtn = document.querySelector(".button-controls #plus-btn");
const minusBtn = document.querySelector(".button-controls #minus-btn");
const changeBy = document.querySelector(".change-by input");
const resetBtn = document.querySelector("#reset-btn");

plusBtn.addEventListener("click", () => {
  const currentCount = parseInt(count.innerText);

  const changeByValue = parseInt(changeBy.value);

  count.innerText = currentCount + changeByValue;
});
minusBtn.addEventListener("click", () => {
  const currentCount = parseInt(count.innerText);
  const changeByValue = parseInt(changeBy.value);
  count.innerText = currentCount - changeByValue;
});

resetBtn.addEventListener("click", () => {
  count.innerText = 0;
  changeByValue.value = "";
});
