let input = document.getElementById("textInput");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("list");
let text = document.getElementById("text");

addBtn.addEventListener("click", () => {
  let li = document.createElement("li");

  li.textContent = input.value;
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    list.removeChild(li);
  });

  li.appendChild(deleteBtn);
  list.appendChild(li);
});
let preview = document.getElementById("preview");

input.addEventListener("input", () => {

    preview.textContent = input.value;

});
