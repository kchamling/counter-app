const count = document.querySelector(".count")
const plusBtn = document.querySelector("#plusBtn")
const minusBtn = document.querySelector("#minusBtn")
const resetBtn = document.querySelector("#resetBtn")
const changeBy = document.querySelector("#changeBy")

plusBtn.addEventListener("click", () => {
  const countValue = parseInt(count.innerText)
  const changeByValue = parseInt(changeBy.value)
  count.innerText = countValue + changeByValue
})

minusBtn.addEventListener("click", () => {
  const countValue = parseInt(count.innerText)
  const changeByValue = parseInt(changeBy.value)
  count.innerText = countValue - changeByValue
})

resetBtn.addEventListener("click", () => {
  count.innerText = "0"
})
