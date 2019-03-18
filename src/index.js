const taskList = new TaskList();

document.addEventListener("DOMContentLoaded", () => {
  
  const addTaskForm = document.querySelector("#create-task-form");
  addTaskForm.addEventListener("submit", addTaskOnClick);


  renderApp()
});

function addTaskOnClick(event) {
  event.preventDefault();

  const form = event.srcElement;
  const descriptionInput = form.querySelector("#new-task-description");
  const taskDescription = descriptionInput.value;
  const prioritySelect = form.querySelector("#priority");
  const priority = prioritySelect.value;
  console.log(priority);

  console.log(taskDescription);
  taskList.addTask(taskDescription, priority);

  renderApp();
}

function renderApp() {
  removeAllRenderedTasks();

  const listContainer = document.getElementById("list");
  const renderedTasks = taskList.render();
  
  listContainer.appendChild(renderedTasks);
}

function removeAllRenderedTasks() {
  const listContainer = document.getElementById("list");
  [...listContainer.children].forEach(child => child.remove());
}
