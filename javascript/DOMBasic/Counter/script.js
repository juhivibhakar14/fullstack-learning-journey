let count = 0;

let inc = document.getElementById("inc");
let dec = document.getElementById("dec");
let reset = document.getElementById("reset");
let display = document.getElementById("count");

inc.addEventListener("click", () => {
  count++;
  display.textContent = count;
});

dec.addEventListener("click", () => {
  count--;
  display.textContent = count;
});

reset.addEventListener("click", () => {
  count = 0;
  display.textContent = count;
});