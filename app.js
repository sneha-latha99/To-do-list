const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
addBtn.addEventListener("click", function () {
if (taskInput.value.trim() === "") return;
const li = document.createElement("li");
li.textContent = taskInput.value;
li.addEventListener("click", function () {
li.classList.toggle("completed");
});
const removeBtn = document.createElement("button");
removeBtn.textContent = "X";
removeBtn.addEventListener("click", function () {
li.remove();
});
li.appendChild(removeBtn);
taskList.appendChild(li);
taskInput.value = "";
});
