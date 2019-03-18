const taskList = new TaskList();
document.addEventListener("DOMContentLoaded", () => {

  const listContainer = document.getElementById("list");
  const renderApp = () => (listContainer.appendChild(taskList.render()));

  const submitButton = document.getElementById("submit-button")
  submitButton.addEventListener('click', (ev)=> {
    ev.preventDefault()
    
    listContainer.innerText = ''
    let newestTask = TaskListItem.newTask()
    taskList.addTask(newestTask.render())
    renderApp()
  })

  renderApp()
});
