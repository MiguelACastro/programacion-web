const addBtn = document.getElementById("add");
const taskInput = document.getElementById("task");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", () => {
    const task = document.createElement("li");
    task.classList.add("task");
    task.innerText = taskInput.value;
    taskList.appendChild(task);
    
});