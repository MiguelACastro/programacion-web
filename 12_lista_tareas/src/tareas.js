const addBtn = document.getElementById("add");
const taskInput = document.getElementById("task");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", () => {
    const task = document.createElement("li");
    task.classList.add("task");

    const taskContent = document.createElement("span");
    taskContent.innerText = taskInput.value;
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.marginRight = "1rem";
    checkbox.classList.add("checkbox");
    checkbox.addEventListener("change", () => {
        task.classList.toggle("completed");
    })

    task.appendChild(checkbox);
    task.appendChild(taskContent);
    taskList.appendChild(task);
});