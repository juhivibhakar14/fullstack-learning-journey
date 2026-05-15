let textInput = document.getElementById("textInput");
let addBtn = document.getElementById("addBtn");
let viewTaskNo = document.getElementById("viewTaskNo");
let list = document.getElementById("list");
let preview = document.getElementById("preview");

textInput.addEventListener("input",()=>{
   preview.textContent =  textInput.value;
})