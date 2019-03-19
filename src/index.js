const taskList = new TaskList();

document.addEventListener("DOMContentLoaded", () => {

  const listContainer = document.getElementById("list");
  const renderApp = () => (listContainer.appendChild(taskList.render()));

  // Add Form Behavior Here!
  const submitButton = document.getElementById('submit-button')
  submitButton.addEventListener('click', (e) => {
    e.preventDefault()

    listContainer.innerText = ''
    let genTask = TaskListItem.newTask()
    taskList.addTask(genTask.render())
    renderApp()
  })

  renderApp()
});
