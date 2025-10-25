const addBtn = document.getElementById("add");
const taskInput = document.getElementById("task");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", () => {
    const task = document.createElement("li");
    task.classList.add("task");

    const taskContent = document.createElement("span");
    taskContent.classList.add("task-text")
    taskContent.innerText = taskInput.value;
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    checkbox.addEventListener("change", () => {
        taskContent.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
        task.remove();
    });

    task.appendChild(checkbox);
    task.appendChild(taskContent);
    task.appendChild(deleteBtn);
    taskList.appendChild(task);
});