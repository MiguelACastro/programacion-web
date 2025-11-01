import { addTask } from "./task.js";
import { showTasks, addTaskToDOM} from "./ui.js";

const addBtn = document.getElementById("add");
const taskInput = document.getElementById("task");

addBtn.addEventListener("click", processTask);

taskInput.addEventListener("keydown", (e) => {
    if(e.key == "Enter") {
        processTask();
    }
    
})
function processTask() {
    if(taskInput.value.trim()) {
        let newTask = addTask(taskInput.value);
        addTaskToDOM(newTask);
        taskInput.value = "";
        taskInput.focus();
    }
}

window.onload = showTasks;