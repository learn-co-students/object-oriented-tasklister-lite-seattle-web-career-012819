document.addEventListener("DOMContentLoaded", () => {

  const listContainer = document.getElementById("list");
  const taskList = new TaskList();
  const renderApp = () => {
  listContainer.appendChild (taskList.render())
  }


  // Add Form Behavior Here!
  const priority = document.getElementById('priority')
  const form = document.getElementById('create-task-form')
  const formDescription = document.getElementById('new-task-description')
  form.addEventListener('submit', function(e){
    e.preventDefault();
    let task = new TaskListItem(formDescription.value, priority.value)
    taskList.tasks.push(task)
    listContainer.innerHTML = ''
    renderApp()
    form.reset();
  })

});
