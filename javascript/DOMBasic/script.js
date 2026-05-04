let title = document.getElementById("title");
let btn = document.getElementById("btn");

// change content once
title.textContent = "Changed!";

// event (click)
btn.addEventListener("click", () => {
  title.textContent = "Button Clicked!";
});