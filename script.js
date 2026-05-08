function addTask() {

    // Get input value
    let taskInput = document.getElementById("taskInput");

    // Store typed text
    let taskText = taskInput.value;

    // Prevent empty tasks
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create new list item
    let li = document.createElement("li");

    // Add text to list item
    li.innerText = taskText;

    // Add list item to task list
    document.getElementById("taskList").appendChild(li);

    // Clear input field
    taskInput.value = "";
}