class TaskList {
  constructor(){
  this.tasks = [];
  }

  render() {
    let taskList = this.tasks;
    let container =  document.getElementById("list");
    taskList.forEach(task => {
      task.render(container);
    })

  }
  
  delete(targetTask) {
    this.tasks.filter( task => task.description != targetTask.description )
  }

}
