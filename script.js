function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a valid task.");
        return;
    }

    const ul = document.getElementById("todoList");

    // Create new list item
    const li = document.createElement("li");

    // Create task text element
    const span = document.createElement("span");
    span.textContent = taskText;

    // Create edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = () => editTask(span);

    // Create remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Delete";
    removeButton.onclick = () => removeTask(li);

    // Append elements to list item
    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(removeButton);

    // Append list item to the list
    ul.appendChild(li);

    // Clear input field
    input.value = "";
}

// Function to edit a task
function editTask(span) {
    const newText = prompt("Edit your task:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
        span.textContent = newText.trim();
    }
}

// Function to remove a task
function removeTask(li) {
    li.remove();
}
