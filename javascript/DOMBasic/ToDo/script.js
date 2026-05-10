let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("list");

addBtn.addEventListener("click", () => {
  let task = input.value;

  if (task === "") return;

  // create li
  let li = document.createElement("li");
  li.textContent = task;

  // create delete button
  let delBtn = document.createElement("button");
  delBtn.textContent = " X";

  // delete logic
  delBtn.addEventListener("click", () => {
    li.remove();
  });

  // add button to li
  li.appendChild(delBtn);

  // add li to list
  list.appendChild(li);

  // clear inputx   
  input.value = "";
});