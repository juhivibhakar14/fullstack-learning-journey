let text = document.getElementById("text");
let textInput = document.getElementById("textInput");
let counter = document.getElementById("countBtn");
let colorBtn = document.getElementById("colorBtn");
let hideBtn = document.getElementById("hideBtn");
let showBtn = document.getElementById("showBtn");
let hideshow = document.getElementById("hideShow");
let count = 0;

colorBtn.addEventListener("click", () => {

    text.style.color = "red";

});


counter.addEventListener("click", () => {

    count++;

    text.textContent = count;

});

hideBtn.addEventListener("click", () => {

    hideshow.style.display = "none";

});

showBtn.addEventListener("click", () => {

    hideshow.style.display = "block";
});