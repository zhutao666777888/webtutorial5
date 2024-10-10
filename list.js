
window.onload = loadTasks;

// 添加任务并更新本地存储
function addTask() {
    let taskInput = document.getElementById("taskInput");
    if (!taskInput.value) return;
    let taskList = getTasksFromLocalStorage();
    taskList.push(taskInput.value);
    updateTasks(taskList);
    taskInput.value = ""; 
}

// 渲染任务列表
function renderTasks(taskList) {
    document.getElementById("taskList").innerHTML = taskList
        .map((task, index) => `<li>${task} <button onclick="removeTask(${index})">Remove</button></li>`)
        .join("");
}

// 删除任务并更新本地存储
function removeTask(index) {
    let taskList = getTasksFromLocalStorage();
    taskList.splice(index, 1);
    updateTasks(taskList);
}

// 获取本地存储中的任务列表
function getTasksFromLocalStorage() {
    return JSON.parse(localStorage.getItem("taskList") || "[]");
}

// 保存任务并渲染
function updateTasks(taskList) {
    localStorage.setItem("taskList", JSON.stringify(taskList));
    renderTasks(taskList);
}

// 加载任务
function loadTasks() {
    renderTasks(getTasksFromLocalStorage());
}
