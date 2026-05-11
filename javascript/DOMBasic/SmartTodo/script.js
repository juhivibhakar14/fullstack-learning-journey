let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let loadBtn = document.getElementById("loadBtn");
let list = document.getElementById("list");

// add manual todo
addBtn.addEventListener("click", () => {

  let task = input.value;

  if(task === "") return;

  createTodo(task);

  input.value = "";

});

// reusable function
function createTodo(text) {

  // create li
  let li = document.createElement("li");

  li.textContent = text;

  // create delete button
  let delBtn = document.createElement("button");

  delBtn.textContent = "Delete";

  // delete logic
  delBtn.addEventListener("click", () => {
    li.remove();
  });

  // append button
  li.appendChild(delBtn);

  // append li
  list.appendChild(li);
}

// load api todos
loadBtn.addEventListener("click", () => {

  fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
    .then(res => res.json())
    .then(data => {

      data.forEach(todo => {

        createTodo(todo.title);

      });

    });

});