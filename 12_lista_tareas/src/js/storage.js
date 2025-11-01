export function saveTasks(tasks, lastID) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("lastId", lastID.toString());
}

export function getTasksFromStorage() {
    return localStorage.getItem("tasks")? JSON.parse(localStorage.getItem("tasks")) : [];
}

export function getLastIDFromStorage() {
    return localStorage.getItem("lastId")? parseInt(localStorage.getItem("lastId")) : 0;
}