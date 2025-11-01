import {saveTasks ,getTasksFromStorage, getLastIDFromStorage } from "./storage.js";

let tasks = getTasksFromStorage();
let lastID = getLastIDFromStorage();

export function addTask(content) {
    const newTask = {
        id: lastID,
        content,
        completed: false
    };

    lastID++;
    tasks.push(newTask);
    saveTasks(tasks, lastID);
    return newTask
}

export function deleteTask(deleteID) {
    tasks = tasks.filter(t => t.id !== deleteID);
    saveTasks(tasks, lastID);
}

export function changeStatus(task, completed) {
    task.completed = completed;
    saveTasks(tasks, lastID);
}

export function getTasks() {
    return tasks;
}