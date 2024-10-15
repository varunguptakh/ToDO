const addButton = document.getElementById("add-btn");
const taskInput = document.getElementById("task-input");
const todoList = document.getElementById("todo-list");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please Enter a Task!");
    return;
  }
  const li = document.createElement("li");
  li.textContent = taskText;
  todoList.appendChild(li);
  taskInput.value = "";
}
addButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    addTask();
  }
});
