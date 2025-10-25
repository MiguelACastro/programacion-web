const addBtn = document.getElementById("add");
const taskInput = document.getElementById("task");
const taskList = document.getElementById("task-list");

let tasks = localStorage.getItem("tasks")? JSON.parse(localStorage.getItem("tasks")) : [];
let lastId = localStorage.getItem("lastId")? parseInt(localStorage.getItem("lastId")) : 0;

tasks.forEach(addTaskToDOM);

function addTaskToDOM(taskObj) {
    const task = document.createElement("li");
    task.classList.add("task");
    
    const taskContent = document.createElement("span");
    taskContent.classList.add("task-text")
    taskContent.innerText = taskObj.content;
    if(taskObj.completed) {
        taskContent.classList.add("completed");
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    checkbox.checked = taskObj.completed;
    checkbox.addEventListener("change", () => {
        taskContent.classList.toggle("completed");
        taskObj.completed = checkbox.checked;
        saveTasks();
    });
    
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
        task.remove();
        tasks = tasks.filter(t => t.id !== taskObj.id);
        saveTasks();
    });
    
    task.appendChild(checkbox);
    task.appendChild(taskContent);
    task.appendChild(deleteBtn);
    taskList.appendChild(task);
}

function addTask() {
    if(taskInput.value) {
        const content = taskInput.value;
    
        const newTask = {
            id: lastId,
            content,
            completed: false
        };
    
        lastId++;
        tasks.push(newTask);
        saveTasks();
        addTaskToDOM(newTask);
        taskInput.value = "";
        taskInput.focus();
    }
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("lastId", lastId.toString());
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (e) => {
    if(e.key == "Enter") {
        addTask();
    }
})