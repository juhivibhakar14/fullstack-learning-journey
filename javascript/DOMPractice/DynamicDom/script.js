let input = document.getElementById("textInput");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("list");
let preview = document.getElementById("preview");
let countText = document.getElementById("count");

let count = 0;

// live preview
input.addEventListener("input", () => {
  preview.textContent = input.value;
});

// add task function
function addTask() {

  let task = input.value.trim();

  // empty validation
  if(task === ""){
    alert("Enter a task");
    return;
  }

  // create li
  let li = document.createElement("li");

  // create task text
  let span = document.createElement("span");
  span.textContent = task;

  // complete task
  span.addEventListener("click", () => {
    span.classList.toggle("done");
  });

  // delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", () => {
    li.remove();

    count--;
    countText.textContent = count;
  });

  // append elements
  li.appendChild(span);
  li.appendChild(deleteBtn);

  list.appendChild(li);

  // update counter
  count++;
  countText.textContent = count;

  // clear input
  input.value = "";
  preview.textContent = "";
}

// button click
addBtn.addEventListener("click", () => {
  addTask();
});

// enter key support
input.addEventListener("keydown", (e) => {

  if(e.key === "Enter"){
    addTask();
  }

});