let textInput = document.getElementById("textInput");
let addBtn = document.getElementById("addBtn");
let viewTaskNo = document.getElementById("viewTaskNo");
let list = document.getElementById("list");
let preview = document.getElementById("preview");
let taskCount = document.getElementById("taskCount");

// counter variable
let count = 0;

// live preview
textInput.addEventListener("input", () => {

    preview.textContent = textInput.value;

});

// add task
addBtn.addEventListener("click", () => {

    // remove spaces
    textInput.value = textInput.value.trim();

    // empty validation
    if (textInput.value === "") {
        return;
    }

    // create li
    let li = document.createElement("li");

    // add text inside li
    li.textContent = textInput.value;

    // create delete button
    let deleteBtn = document.createElement("button");

    // button text
    deleteBtn.textContent = "Delete";

    // delete logic
    deleteBtn.addEventListener("click", () => {

        // remove li
        li.remove();

        // decrease counter
        count--;

        // update screen
        taskCount.textContent = count;

    });

    // put button inside li
    li.appendChild(deleteBtn);

    // put li inside ul
    list.appendChild(li);

    // increase counter
    count++;

    // update counter on screen
    taskCount.textContent = count;

    // clear input
    textInput.value = "";

    // clear preview
    preview.textContent = "";

});
textInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addBtn.click();
    }
});