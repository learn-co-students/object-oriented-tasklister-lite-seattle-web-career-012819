document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  const listContainer = document.getElementById("list");
  const renderApp = () => (listContainer.innerHTML = taskList.render());

  const taskForm = document.getElementById("create-task-form");
  taskForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const newTask = document.getElementById("new-task-description").value;
    let item = new TaskListItem(newTask);
    taskList.tasks.push(item);
    item.render(listContainer)
  })


  renderApp()
  listContainer.textContent = "My TODO:"
});
