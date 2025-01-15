const inputAmount = document.getElementById("input-amount");
const outputAmount = document.getElementById("output-amount");
const form = document.querySelector("form");

const EXCHANGE_RATE = 2;

inputAmount.addEventListener("input", function () {
  const value = parseFloat(this.value) || 0;
  outputAmount.value = (value * EXCHANGE_RATE).toFixed(2);
});

outputAmount.addEventListener("input", function () {
  const value = parseFloat(this.value) || 0;
  inputAmount.value = (value / EXCHANGE_RATE).toFixed(2);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!inputAmount.value || !outputAmount.value) {
    alert("Please enter the amount!");
    return;
  }

  alert("Transaction successful!");
});
