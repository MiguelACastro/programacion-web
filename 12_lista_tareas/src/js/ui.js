import {getTasks, changeStatus, deleteTask } from "./task.js";

const taskList = document.getElementById("task-list");


export function addTaskToDOM(taskObj) {
    const task = document.createElement("li");
    task.classList.add("task");
    
    const taskContent = document.createElement("span");
    taskContent.classList.add("task-text");
    taskContent.innerText = taskObj.content;
    
    if(taskObj.completed) {
        taskContent.classList.add("completed");
    }
    
    const checkbox = createCheckbox(taskObj, taskContent);
    const deleteBtn = createDeleteButton(taskObj, task);
    
    task.appendChild(checkbox);
    task.appendChild(taskContent);
    task.appendChild(deleteBtn);
    taskList.appendChild(task);
}

function createCheckbox(taskObj, taskContent) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    checkbox.checked = taskObj.completed;

    checkbox.addEventListener("change", () => {
        taskContent.classList.toggle("completed");
        changeStatus(taskObj, checkbox.checked);
    });

    return checkbox;
}

function createDeleteButton(taskObj, task) {
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", () => {
        task.remove();
        deleteTask(taskObj.id);
    });

    return deleteBtn;
}

export function showTasks() {
    getTasks().forEach(addTaskToDOM);
}