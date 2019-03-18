class TaskList {
  constructor(){
    this.tasks = []
  }

  render() {
    let taskList = this.tasks;
    let container = document.getElementById("list");
    taskList.forEach(task => {
      task.render(container);
    })
  }

  delete(target_task){
    this.tasks.filter(task => task.description != target_task.description);
    this.render();
  }
}
