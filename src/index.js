document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  const listContainer = document.getElementById("list");
  const renderApp = () => {
    listContainer.innerHTML = '';
    listContainer.appendChild(taskList.render());
  }

  // Add Form Behavior Here!

  function newTask() {
    const taskForm = document.getElementById('create-task-form');
    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // function removeFromList() {
      //   const index = TaskList.tasks.indexOf(`${input.value}`);
      //   TaskList.splice(index, 1);
      // }
      //pass the above into the taskListItem on like 24.
      //can move this function's functionality to TaskList and call it add().

      const input = document.getElementById('new-task-description').value;
      const taskListItem = new TaskListItem(input);
      taskList.tasks.push(taskListItem);
      renderApp()
    });
  }
  newTask();

  renderApp()
});
